"use strict";
const common_vendor = require("../../common/vendor.js");
common_vendor.defineStore("main", {
  // 状态（类似Vuex的state）
  state: () => ({
    themeColor: "rgb(255, 221, 0)",
    sizeColor: "rgb(255, 165, 0)",
    cart: []
  }),
  // 计算属性（类似Vuex的getters）
  getters: {
    isLogin: (state) => !!state.userInfo,
    cartCount: (state) => state.cart.length
  },
  // 方法（同步/异步均可，类似Vuex的mutations+actions）
  actions: {
    // 同步修改
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
    },
    addToCart(goods) {
      this.cart.push(goods);
    },
    // 异步操作（登录）
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
        common_vendor.index.__f__("error", "at store/modules/user.js:37", "登录失败", err);
        throw err;
      }
    }
  }
});
//# sourceMappingURL=../../../.sourcemap/mp-weixin/store/modules/user.js.map
