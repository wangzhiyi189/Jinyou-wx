"use strict";
const common_vendor = require("../common/vendor.js");
function getToken() {
  return common_vendor.index.getStorageSync("token") || "";
}
function removeToken() {
  common_vendor.index.removeStorageSync("token");
}
exports.getToken = getToken;
exports.removeToken = removeToken;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/auth.js.map
