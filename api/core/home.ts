import request from '@/api/request'
// 获取首页轮播图
export function getBanners() {
  return request.get('/home/banner')
}

export function getTopBanners() {
  return request.get('/home/topBanner')
}