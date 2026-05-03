"use strict";
const common_vendor = require("../common/vendor.js");
const api_config = require("./config.js");
const utils_auth = require("../utils/auth.js");
let redirectUrl = "";
const setRedirectUrl = (url) => {
  redirectUrl = url;
};
const getRedirectUrl = () => redirectUrl;
const clearRedirectUrl = () => {
  redirectUrl = "";
};
const pendingRequests = /* @__PURE__ */ new Map();
const getKey = (url, method) => `${method || "GET"}:${url}`;
const cancelPrevious = (url, method) => {
  const key = getKey(url, method);
  if (pendingRequests.has(key)) {
    try {
      pendingRequests.get(key).abort();
    } catch {
    }
    pendingRequests.delete(key);
  }
};
const request = (options) => {
  const header = {
    "Content-Type": "application/json;charset=UTF-8",
    ...options.header
  };
  const token = utils_auth.getToken();
  if (token)
    header["Authorization"] = `Bearer ${token}`;
  const url = api_config.config.baseUrl + options.url;
  const method = options.method || "GET";
  const reqKey = getKey(options.url, method);
  cancelPrevious(options.url, method);
  return new Promise((resolve, reject) => {
    const task = common_vendor.index.request({
      url,
      method,
      data: options.data || {},
      header,
      timeout: api_config.config.timeout,
      complete: () => {
        pendingRequests.delete(reqKey);
      },
      success: (res) => {
        const statusCode = res.statusCode;
        if (statusCode === 401) {
          const pages = getCurrentPages();
          const currentPage = pages[pages.length - 1];
          const fromUrl = currentPage ? `/${currentPage.route}` : "/pages/index/index";
          setRedirectUrl(fromUrl);
          common_vendor.index.showToast({ title: "请先登录", icon: "none" });
          setTimeout(() => {
            utils_auth.removeToken();
            common_vendor.index.navigateTo({ url: "/pages/login/index" });
          }, 1e3);
          return reject(res.data);
        }
        const data = res.data;
        if (data.code !== 200) {
          if (data.code !== 500) {
            common_vendor.index.showToast({ title: data.msg || "请求失败", icon: "none" });
          }
          return reject(data);
        }
        resolve(data);
      },
      fail: (err) => {
        var _a;
        if ((_a = err == null ? void 0 : err.errMsg) == null ? void 0 : _a.includes("abort"))
          return;
        common_vendor.index.showToast({ title: "网络异常", icon: "none" });
        reject(err);
      }
    });
    pendingRequests.set(reqKey, task);
  });
};
const request$1 = {
  get: (url, data, opt) => request({ url, method: "GET", data, ...opt }),
  post: (url, data, opt) => request({ url, method: "POST", data, ...opt }),
  put: (url, data, opt) => request({ url, method: "PUT", data, ...opt }),
  delete: (url, data, opt) => request({ url, method: "DELETE", data, ...opt })
};
exports.clearRedirectUrl = clearRedirectUrl;
exports.getRedirectUrl = getRedirectUrl;
exports.request = request$1;
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/request.js.map
