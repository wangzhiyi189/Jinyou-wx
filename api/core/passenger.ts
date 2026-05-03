import request from '@/api/request'

export interface PassengerData {
  passengerId?: number
  name: string
  phone: string
  idCard: string
  ticketType: number
  idType: number
}
// 获取乘客列表
export function getPassengerList() {
  return request.get('/passenger/list')
}
// 修改
export function postPassengerAdd(data:PassengerData) {
  return request.post('/passenger/add',data)
}

// 删除
export function postPassengerDelete(id:number) {
  return request.delete(`/passenger/delete/${id}`)
}

// 修改
export function putPassengerUpdate(data:PassengerData) {
  return request.put('/passenger/update',data)
}

// 详情
export function getPassengerDetail(data:{id:number}) {
  return request.get(`/passenger/details`,data)
}