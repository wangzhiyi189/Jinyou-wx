"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  _easycom_u_icon2();
}
const _easycom_u_icon = () => "../../node-modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  _easycom_u_icon();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const list = common_vendor.ref([
      {
        id: 1,
        title: "临汾-壶口瀑布",
        img: "",
        address: "吉县"
      },
      {
        id: 2,
        title: "临汾-小西天",
        img: "",
        address: "隰县"
      },
      {
        id: 3,
        title: "临汾-云丘山",
        img: "",
        address: "乡宁"
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(common_assets.recommendIcon),
        b: common_vendor.f(list.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: "af138f8b-0-" + i0,
            c: common_vendor.t(item.address),
            d: item.img,
            e: item.id
          };
        }),
        c: common_vendor.p({
          name: "map",
          color: "#fff"
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-af138f8b"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/recommend/index.js.map
