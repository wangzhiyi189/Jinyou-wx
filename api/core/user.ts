import request from '@/api/request'

/**
 * 登录
 */
export function wxLogin(data:string){
  return request.post('/user/wxLogin',data);
}
/**
 * 获取个人信息
 */
export function getUserInfo(){
  return request.get('/user/info')
}