"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      currentIndex: 0,
      swiperList: [
        { image: "/static/swiper1.png", title: "卡片1" },
        { image: "/static/swiper2.png", title: "卡片2" },
        { image: "/static/swiper3.png", title: "卡片3" }
      ]
    };
  },
  methods: {
    handleSwiperChange(e) {
      this.currentIndex = e.detail.current;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.swiperList, (item, index, i0) => {
      return {
        a: item.image,
        b: common_vendor.t(item.title),
        c: index === $data.currentIndex ? 10 : 1,
        d: index === $data.currentIndex ? "translateY(0)" : "translateY(20rpx)",
        e: index === $data.currentIndex ? "0 10rpx 30rpx rgba(0,0,0,0.2)" : "0 5rpx 10rpx rgba(0,0,0,0.1)",
        f: index
      };
    }),
    b: $data.currentIndex,
    c: common_vendor.o((...args) => $options.handleSwiperChange && $options.handleSwiperChange(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1fa3f802"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/animation/animation.js.map
