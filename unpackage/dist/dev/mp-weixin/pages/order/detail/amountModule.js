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
  __name: "amountModule",
  props: {
    data: Object,
    passenger: Object
  },
  setup(__props, { expose: __expose }) {
    const current = common_vendor.ref(1);
    const tabList = common_vendor.ref([
      {
        label: "金额明细",
        value: 1
      },
      {
        label: "乘客信息",
        value: 2
      }
    ]);
    const show = common_vendor.ref(false);
    const handleOpen = (e = 1) => {
      current.value = e;
      show.value = true;
    };
    const handleTab = (item) => {
      common_vendor.index.__f__("log", "at pages/order/detail/amountModule.vue:62", item.value);
      current.value = item.value;
    };
    __expose({
      handleOpen
    });
    return (_ctx, _cache) => {
      var _a, _b, _c;
      return {
        a: common_vendor.f(tabList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.label),
            b: current.value == item.value ? 1 : "",
            c: item.value,
            d: common_vendor.o(($event) => handleTab(item), item.value)
          };
        }),
        b: common_vendor.o(($event) => show.value = false),
        c: common_vendor.p({
          name: "close"
        }),
        d: common_vendor.t((_a = __props.data) == null ? void 0 : _a.unitPrice),
        e: common_vendor.t((_b = __props.data) == null ? void 0 : _b.ticketCount),
        f: common_vendor.t((_c = __props.data) == null ? void 0 : _c.totalAmount),
        g: current.value == 1,
        h: common_vendor.f(__props.passenger, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.phone),
            c: index
          };
        }),
        i: current.value == 2,
        j: common_vendor.o(($event) => show.value = false),
        k: common_vendor.p({
          round: 15,
          mode: "bottom",
          show: show.value,
          closeOnClickOverlay: true
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b08f3bcc"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/order/detail/amountModule.js.map
