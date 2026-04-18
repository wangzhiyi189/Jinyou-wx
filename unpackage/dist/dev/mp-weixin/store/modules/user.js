"use strict";
const common_vendor = require("../../common/vendor.js");
common_vendor.defineStore("user", {
  // 👉 给 state 明确指定类型
  state: () => ({
    themeColor: "rgb(255, 221, 0)",
    sizeColor: "rgb(255, 165, 0)",
    cart: [],
    userInfo: null
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
    async login(userData) {
      try {
        const res = await common_vendor.index.request({
          url: "/api/login",
          method: "POST",
          data: userData
        });
        this.userInfo = res.data.userInfo;
        return res.data;
      } catch (err) {
        common_vendor.index.__f__("error", "at store/modules/user.ts:68", "登录失败", err);
        throw err;
      }
    }
  }
});
//# sourceMappingURL=../../../.sourcemap/mp-weixin/store/modules/user.js.map
