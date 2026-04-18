/**
 * getToken():string 表示会返回一个字符串
 *setToken(token:string) 告诉TS这个函数需要一个字符串参数
  *removeToken():void 表示这个函数没有返回值
 */

// 获取 token
export function getToken():string {
  return uni.getStorageSync('token') || '';
}

// 设置 token
export function setToken(token:string):void {
  uni.setStorageSync('token', token)
}

// 删除 token

export function removeToken():void {
  uni.removeStorageSync('token')
}