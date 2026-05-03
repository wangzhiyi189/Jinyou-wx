"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_popup2 = common_vendor.resolveComponent("u-popup");
  (_easycom_u_icon2 + _easycom_u_popup2)();
}
const _easycom_u_icon = () => "../../../node-modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_popup = () => "../../../node-modules/uview-plus/components/u-popup/u-popup.js";
if (!Math) {
  (_easycom_u_icon + _easycom_u_popup)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "orderInfoModule",
  props: {
    data: Object
  },
  setup(__props, { expose: __expose }) {
    const show = common_vendor.ref(false);
    const handleOpen = () => {
      show.value = true;
    };
    __expose({
      handleOpen
    });
    return (_ctx, _cache) => {
      var _a, _b, _c;
      return {
        a: common_vendor.o(($event) => show.value = false),
        b: common_vendor.p({
          name: "close"
        }),
        c: common_vendor.t((_a = __props.data) == null ? void 0 : _a.orderNo),
        d: common_vendor.t((_b = __props.data) == null ? void 0 : _b.createTime),
        e: common_vendor.t((_c = __props.data) == null ? void 0 : _c.contactPhone),
        f: common_vendor.o(($event) => show.value = false),
        g: common_vendor.p({
          round: 15,
          mode: "bottom",
          show: show.value,
          closeOnClickOverlay: true
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-16537741"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/order/detail/orderInfoModule.js.map
