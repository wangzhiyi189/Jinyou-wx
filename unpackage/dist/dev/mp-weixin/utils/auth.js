"use strict";
const common_vendor = require("../common/vendor.js");
function getToken() {
  return common_vendor.index.getStorageSync("token") || "";
}
function setToken(token) {
  common_vendor.index.setStorageSync("token", token);
}
function removeToken() {
  common_vendor.index.removeStorageSync("token");
}
function getUser() {
  return common_vendor.index.getStorageSync("user") || "";
}
function setUser(user) {
  common_vendor.index.setStorageSync("user", user);
}
exports.getToken = getToken;
exports.getUser = getUser;
exports.removeToken = removeToken;
exports.setToken = setToken;
exports.setUser = setUser;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/auth.js.map
