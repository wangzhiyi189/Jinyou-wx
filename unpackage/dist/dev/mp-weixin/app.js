"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const store_index = require("./store/index.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/animation/animation.js";
  "./pages/my/index.js";
  "./pages/my/passenger/index.js";
  "./pages/my/passenger/add/index.js";
  "./pages/selectCity/index.js";
  "./pages/tickets/index.js";
  "./pages/order/index/index.js";
  "./pages/order/payment/index.js";
  "./pages/order/list/index.js";
  "./pages/order/detail/index.js";
  "./pages/login/index.js";
}
const _sfc_main = {
  globalData: {
    needRefreshTicketList: false
    // 默认不需要刷新
  },
  onLaunch: function() {
    common_vendor.index.__f__("log", "at App.vue:7", "App Launch");
  },
  onShow: function() {
    common_vendor.index.__f__("log", "at App.vue:10", "App Show");
  },
  onHide: function() {
    common_vendor.index.__f__("log", "at App.vue:13", "App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  app.use(store_index.pinia);
  app.use(common_vendor.uViewPlus);
  return { app };
}
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map
