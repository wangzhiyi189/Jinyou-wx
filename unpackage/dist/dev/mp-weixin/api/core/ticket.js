"use strict";
const api_request = require("../request.js");
function getTicketList(data) {
  return api_request.request.get("/ticket/list", { ...data });
}
function getTicketDetail(data) {
  return api_request.request.get(`/ticket/details/`, { ...data });
}
exports.getTicketDetail = getTicketDetail;
exports.getTicketList = getTicketList;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/api/core/ticket.js.map
