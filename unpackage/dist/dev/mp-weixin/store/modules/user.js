"use strict";
const common_vendor = require("../../common/vendor.js");
const api_request = require("../../api/request.js");
const api_core_user = require("../../api/core/user.js");
const utils_auth = require("../../utils/auth.js");
const useUserStore = common_vendor.defineStore("user", {
  // 👉 给 state 明确指定类型
  state: () => ({
    themeColor: "rgb(255, 221, 0)",
    sizeColor: "rgb(255, 165, 0)",
    cart: [],
    userInfo: utils_auth.getUser() ? JSON.parse(utils_auth.getUser()) : null
    // 从缓存获取用户信息，注意解析, 
  }),
  // 👉 getters 全部加上类型，消除隐式 any
  getters: {
    // state 明确类型
    isLogin: (state) => !!state.userInfo,
    cartCount: (state) => state.cart.length
  },
  // 👉 actions 全部加参数类型 + 修复错误
  actions: {
    // 你原来写的 theme 不存在，我改成 themeColor
    toggleThemeColor() {
      this.themeColor = this.themeColor === "rgb(255, 221, 0)" ? "rgb(0, 0, 0)" : "rgb(255, 221, 0)";
    },
    // 给商品加类型
    addToCart(goods) {
      this.cart.push(goods);
    },
    // 登录参数 + 返回值类型
    async login() {
      try {
        const loginRes = await common_vendor.index.login();
        const appid = loginRes.code;
        const { data, code, message } = await api_core_user.wxLogin(appid);
        common_vendor.index.__f__("log", "at store/modules/user.ts:64", data);
        utils_auth.setToken(data);
        this.info();
        const redirectUrl = api_request.getRedirectUrl();
        if (redirectUrl) {
          common_vendor.index.redirectTo({
            url: redirectUrl
          });
          api_request.clearRedirectUrl();
        } else {
          common_vendor.index.reLaunch({
            url: "/pages/index/index"
          });
        }
      } catch (err) {
        common_vendor.index.__f__("error", "at store/modules/user.ts:82", "登录失败", err);
        throw err;
      }
    },
    async info() {
      const { data } = await api_core_user.getUserInfo();
      this.userInfo = data;
      utils_auth.setUser(JSON.stringify(data));
    }
  }
});
exports.useUserStore = useUserStore;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/store/modules/user.js.map
