"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_textarea2 = common_vendor.resolveComponent("u-textarea");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_popup2 = common_vendor.resolveComponent("u-popup");
  (_easycom_u_icon2 + _easycom_u_textarea2 + _easycom_u_button2 + _easycom_u_popup2)();
}
const _easycom_u_icon = () => "../../../node-modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_textarea = () => "../../../node-modules/uview-plus/components/u-textarea/u-textarea.js";
const _easycom_u_button = () => "../../../node-modules/uview-plus/components/u-button/u-button.js";
const _easycom_u_popup = () => "../../../node-modules/uview-plus/components/u-popup/u-popup.js";
if (!Math) {
  (_easycom_u_icon + _easycom_u_textarea + _easycom_u_button + _easycom_u_popup)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "rmkModule",
  emits: ["change"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emits = __emit;
    const show = common_vendor.ref(false);
    const dataList = common_vendor.ref([1, 2, 3, 4, 5, 6]);
    const luggage = common_vendor.ref();
    const remark = common_vendor.ref("");
    const handleOpen = () => {
      show.value = true;
    };
    const handleSelect = (item) => {
      luggage.value = item;
    };
    const handleSubmit = () => {
      var str = "";
      if (luggage.value) {
        str = `行李数量：${luggage.value}，`;
      }
      emits("change", str + remark.value);
      show.value = false;
    };
    __expose({ handleOpen });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => show.value = false),
        b: common_vendor.p({
          name: "close"
        }),
        c: common_vendor.f(dataList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: luggage.value == item ? 1 : "",
            c: item,
            d: common_vendor.o(($event) => handleSelect(item), item)
          };
        }),
        d: common_vendor.o(($event) => remark.value = $event),
        e: common_vendor.p({
          placeholder: "如有特殊需求，请提前告知，便于更好的为您服务",
          maxlength: "100",
          count: true,
          modelValue: remark.value
        }),
        f: common_vendor.o(handleSubmit),
        g: common_vendor.p({
          type: "primary"
        }),
        h: common_vendor.o(($event) => show.value = false),
        i: common_vendor.p({
          round: 15,
          mode: "bottom",
          show: show.value,
          closeOnClickOverlay: true
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0288fd44"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/order/index/rmkModule.js.map
