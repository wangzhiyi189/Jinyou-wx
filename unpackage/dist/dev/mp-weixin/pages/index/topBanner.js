"use strict";
const common_vendor = require("../../common/vendor.js");
const api_core_home = require("../../api/core/home.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "topBanner",
  setup(__props) {
    const bannerList = common_vendor.ref([]);
    const interval = common_vendor.ref(5e3);
    common_vendor.onMounted(() => {
      requestBanners();
    });
    const requestBanners = async () => {
      const { message, data, code } = await api_core_home.getTopBanners();
      bannerList.value = data;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(bannerList.value, (item, k0, i0) => {
          return {
            a: item.imgUrl,
            b: item.bannerId
          };
        }),
        b: interval.value
      };
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/topBanner.js.map
