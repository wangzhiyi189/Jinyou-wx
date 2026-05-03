import config from './config'
import { getToken, removeToken, setToken } from '@/utils/auth'

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

interface RequestOptions {
  url: string
  method?: RequestMethod
  data?: any
  header?: AnyObject
  timeout?: number
}

interface ResponseData<T = any> {
  code: number
  msg: string
  data: T
  [key: string]: any
}

interface AnyObject {
  [key: string]: any
}

let redirectUrl = ''
export const setRedirectUrl = (url: string) => { redirectUrl = url }
export const getRedirectUrl = () => redirectUrl
export const clearRedirectUrl = () => { redirectUrl = '' }

// ==============================================
// 🔥 核心：全局存储请求任务，用于取消前一次请求
// ==============================================
const pendingRequests = new Map<string, any>()

// 生成唯一 KEY：相同 url + method 视为同一个请求
const getKey = (url: string, method?: string) => `${method || 'GET'}:${url}`

// 取消前一次请求
const cancelPrevious = (url: string, method?: string) => {
  const key = getKey(url, method)
  if (pendingRequests.has(key)) {
    try {
      pendingRequests.get(key).abort() // 🔥 真正中断请求
    } catch {}
    pendingRequests.delete(key)
  }
}

// ==============================================
// 核心请求
// ==============================================
const request = <T = any>(options: RequestOptions): Promise<ResponseData<T>> => {
  const header: any = {
    'Content-Type': 'application/json;charset=UTF-8',
    ...options.header
  }

  const token = getToken()
  if (token) header['Authorization'] = `Bearer ${token}`

  const url = config.baseUrl + options.url
  const method = options.method || 'GET'
  const reqKey = getKey(options.url, method)

  // ==============================================
  // 🔥 关键：发送前先取消上一次相同请求
  // ==============================================
  cancelPrevious(options.url, method)

  return new Promise((resolve, reject) => {
    // 发起请求
    const task = uni.request({
      url,
      method,
      data: options.data || {},
      header,
      timeout: config.timeout || 10000,

      complete: () => {
        pendingRequests.delete(reqKey) // 请求结束清理
      },

      success: (res: any) => {
        const statusCode = res.statusCode
        if (statusCode === 401) {
          const pages = getCurrentPages()
          const currentPage = pages[pages.length - 1]
          const fromUrl = currentPage ? `/${currentPage.route}` : '/pages/index/index'
          setRedirectUrl(fromUrl)
          uni.showToast({ title: '请先登录', icon: 'none' })
          setTimeout(() => {
            removeToken()
            uni.navigateTo({ url: '/pages/login/index' })
          }, 1000)
          return reject(res.data)
        }

        const data = res.data
        if (data.code !== 200) {
          if (data.code !== 500) {
            uni.showToast({ title: data.msg || '请求失败', icon: 'none' })
          }
          return reject(data)
        }
        resolve(data)
      },

      fail: (err) => {
        if (err?.errMsg?.includes('abort')) return // 被取消的请求不提示
        uni.showToast({ title: '网络异常', icon: 'none' })
        reject(err)
      }
    })

    // 保存当前请求，用于下次取消
    pendingRequests.set(reqKey, task)
  })
}

export default {
  get: <T = any>(url: string, data?: any, opt?: RequestOptions) =>
    request<T>({ url, method: 'GET', data, ...opt }),
  post: <T = any>(url: string, data?: any, opt?: RequestOptions) =>
    request<T>({ url, method: 'POST', data, ...opt }),
  put: <T = any>(url: string, data?: any, opt?: RequestOptions) =>
    request<T>({ url, method: 'PUT', data, ...opt }),
  delete: <T = any>(url: string, data?: any, opt?: RequestOptions) =>
    request<T>({ url, method: 'DELETE', data, ...opt }),
}