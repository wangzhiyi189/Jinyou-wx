"use strict";
const common_vendor = require("../common/vendor.js");
const api_config = require("./config.js");
const utils_auth = require("../utils/auth.js");
const request = (options) => {
  const header = {
    "Content-Type": "application/json;charset=UTF-8",
    ...options.header
  };
  const token = utils_auth.getToken();
  if (token) {
    header["token"] = token;
  }
  const url = api_config.config.baseUrl + options.url;
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url,
      method: options.method || "GET",
      data: options.data || {},
      header,
      timeout: api_config.config.timeout,
      success(res) {
        const { data } = res;
        if (data.code === 401) {
          utils_auth.removeToken();
          common_vendor.index.reLaunch({ url: "/pages/login/login" });
          return reject(data);
        }
        if (data.code !== 200) {
          common_vendor.index.showToast({
            title: data.msg || "请求失败",
            icon: "none"
          });
          return reject(data);
        }
        resolve(data);
      },
      fail(err) {
        common_vendor.index.showToast({
          title: "网络异常",
          icon: "none"
        });
        reject(err);
      }
    });
  });
};
const request$1 = {
  get(url, data, options) {
    return request({ url, method: "GET", data, ...options });
  },
  post(url, data, options) {
    return request({ url, method: "POST", data, ...options });
  },
  put(url, data, options) {
    return request({ url, method: "PUT", data, ...options });
  },
  delete(url, data, options) {
    return request({ url, method: "DELETE", data, ...options });
  }
};
exports.request = request$1;
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/request.js.map
