"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  _easycom_u_icon2();
}
const _easycom_u_icon = () => "../../node-modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  _easycom_u_icon();
}
const _sfc_main = {
  __name: "index",
  props: {
    data: Object
  },
  emits: ["unit"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    common_vendor.onMounted(() => {
    });
    const handleDetail = (e) => {
      common_vendor.index.navigateTo({ url: `/pages/order/index?type=${e}` });
    };
    const handleUnit = () => {
      emit("unit");
    };
    return (_ctx, _cache) => {
      var _a, _b;
      return {
        a: common_vendor.t(__props.data.time),
        b: common_vendor.t((_a = __props.data) == null ? void 0 : _a.arriveTime),
        c: common_vendor.o(handleUnit),
        d: common_vendor.p({
          name: "info-circle"
        }),
        e: common_vendor.o(() => {
        }),
        f: common_vendor.t((_b = __props.data) == null ? void 0 : _b.end),
        g: common_vendor.t(__props.data.start),
        h: common_vendor.t(__props.data.price),
        i: common_vendor.t(__props.data.number),
        j: common_vendor.o(handleDetail)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9828ffe1"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/ticketCard/index.js.map
