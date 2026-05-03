"use strict";
const api_request = require("../request.js");
function wxLogin(data) {
  return api_request.request.post("/user/wxLogin", data);
}
function getUserInfo() {
  return api_request.request.get("/user/info");
}
exports.getUserInfo = getUserInfo;
exports.wxLogin = wxLogin;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/api/core/user.js.map
