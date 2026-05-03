"use strict";
const api_request = require("../request.js");
function getPassengerList() {
  return api_request.request.get("/passenger/list");
}
function postPassengerAdd(data) {
  return api_request.request.post("/passenger/add", data);
}
function postPassengerDelete(id) {
  return api_request.request.delete(`/passenger/delete/${id}`);
}
function putPassengerUpdate(data) {
  return api_request.request.put("/passenger/update", data);
}
function getPassengerDetail(data) {
  return api_request.request.get(`/passenger/details`, data);
}
exports.getPassengerDetail = getPassengerDetail;
exports.getPassengerList = getPassengerList;
exports.postPassengerAdd = postPassengerAdd;
exports.postPassengerDelete = postPassengerDelete;
exports.putPassengerUpdate = putPassengerUpdate;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/api/core/passenger.js.map
