"use strict";
const api_request = require("../request.js");
function getOrderList(data) {
  return api_request.request.get("/order/list", data);
}
function postOrdeSubmit(data) {
  return api_request.request.post("/order/submit", data);
}
function postOrderCancel(data) {
  return api_request.request.post("/order/cancel", data);
}
function getOrderDetail(data) {
  return api_request.request.get(`/order/details/`, data);
}
function postPayOrder(data) {
  return api_request.request.post("/order/wxpay", data);
}
function deleteOrderDelete(data) {
  return api_request.request.delete(`/order/delete`, data);
}
exports.deleteOrderDelete = deleteOrderDelete;
exports.getOrderDetail = getOrderDetail;
exports.getOrderList = getOrderList;
exports.postOrdeSubmit = postOrdeSubmit;
exports.postOrderCancel = postOrderCancel;
exports.postPayOrder = postPayOrder;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/api/core/order.js.map
