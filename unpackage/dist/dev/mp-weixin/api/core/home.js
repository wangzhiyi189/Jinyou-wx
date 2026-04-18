"use strict";
const api_request = require("../request.js");
function getBanners() {
  return api_request.request.get("/home/banner");
}
function getTopBanners() {
  return api_request.request.get("/home/topBanner");
}
exports.getBanners = getBanners;
exports.getTopBanners = getTopBanners;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/api/core/home.js.map
