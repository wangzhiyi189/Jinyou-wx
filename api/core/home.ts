import request from '@/api/request'

export interface popularData {
  lineId: number // 线路id
  endCity: string // 到达站点
	startCity:string //开始站点
  price:number,
}
// 获取首页轮播图
export function getBanners() {
  return request.get('/home/banner')
}

export function getTopBanners() {
  return request.get('/home/topBanner')
}

export function getPopular() {
  return request.get('/home/popular')
}