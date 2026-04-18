import config from './config'
import { getToken, removeToken } from '@/utils/auth'

// -------------- TS 类型定义 --------------
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

// -------------- 核心请求 --------------
const request = <T = any>(options: RequestOptions): Promise<ResponseData<T>> => {
  // Record<string, string> 表示：这是一个对象，键可以是任意字符串，值也必须是字符串。
  const header: Record<string, string> = {
    'Content-Type': 'application/json;charset=UTF-8',
    ...options.header
  }

  const token = getToken()
  if (token) {
    header['token'] = token
  }

  const url = config.baseUrl + options.url

  return new Promise<ResponseData<T>>((resolve, reject) => {
    uni.request({
      url: url,
      method: options.method || 'GET',
      data: options.data || {},
      header: header,
      timeout: config.timeout || 10000,

      success(res) {
        // res as unknown as { data: ResponseData<T> } 这行代码的作用是将 res 强制转换为一个包含 data 属性的对象，并且 data 的类型是 ResponseData<T>。这样做是为了让 TypeScript 知道 res.data 的结构和类型，从而在后续代码中能够正确地访问和使用 res.data 的属性。
        /** res as unknown as T 是 TS 里的 “双重断言” 技巧：
        先断言成 unknown（TS 允许任何类型转成 unknown）
        再断言成目标类型（TS 允许 unknown 转成任何类型）
        它明确告诉 TS：“我知道我在做什么，这里的类型转换是安全的，你不用再检查了。” */
        const { data } = res as unknown as { data: ResponseData<T> }

        // 登录过期
        if (data.code === 401) {
          removeToken()
          uni.reLaunch({ url: '/pages/login/login' })
          return reject(data)
        }

        // 业务失败
        if (data.code !== 200) {
          uni.showToast({
            title: data.msg || '请求失败',
            icon: 'none'
          })
          return reject(data)
        }

        resolve(data)
      },

      fail(err) {
        uni.showToast({
          title: '网络异常',
          icon: 'none'
        })
        reject(err)
      }
    })
  })
}

// -------------- 导出 axios 风格调用 --------------
export default {
  get<T = any>(url: string, data?: any, options?: RequestOptions): Promise<ResponseData<T>> {
    return request<T>({ url, method: 'GET', data, ...options })
  },

  post<T = any>(url: string, data?: any, options?: RequestOptions): Promise<ResponseData<T>> {
    return request<T>({ url, method: 'POST', data, ...options })
  },

  put<T = any>(url: string, data?: any, options?: RequestOptions): Promise<ResponseData<T>> {
    return request<T>({ url, method: 'PUT', data, ...options })
  },

  delete<T = any>(url: string, data?: any, options?: RequestOptions): Promise<ResponseData<T>> {
    return request<T>({ url, method: 'DELETE', data, ...options })
  }
}