"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_checkbox2 = common_vendor.resolveComponent("up-checkbox");
  const _easycom_up_checkbox_group2 = common_vendor.resolveComponent("up-checkbox-group");
  const _easycom_u_popup2 = common_vendor.resolveComponent("u-popup");
  (_easycom_u_icon2 + _easycom_up_icon2 + _easycom_up_checkbox2 + _easycom_up_checkbox_group2 + _easycom_u_popup2)();
}
const _easycom_u_icon = () => "../../../node-modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_up_icon = () => "../../../node-modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_up_checkbox = () => "../../../node-modules/uview-plus/components/u-checkbox/u-checkbox.js";
const _easycom_up_checkbox_group = () => "../../../node-modules/uview-plus/components/u-checkbox-group/u-checkbox-group.js";
const _easycom_u_popup = () => "../../../node-modules/uview-plus/components/u-popup/u-popup.js";
if (!Math) {
  (_easycom_u_icon + _easycom_up_icon + _easycom_up_checkbox + _easycom_up_checkbox_group + _easycom_u_popup)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "paxModule",
  props: {
    data: {
      type: Object,
      required: false,
      // 可选：如果是必填，改成 true
      default: () => ({})
    }
  },
  emits: ["select"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const show = common_vendor.ref(false);
    const checkboxValue = common_vendor.ref([]);
    const paxList = common_vendor.ref([]);
    const emits = __emit;
    const props = __props;
    common_vendor.watch(() => props.data, (val) => {
      paxList.value = val;
    });
    const handleOpen = (e) => {
      show.value = true;
      checkboxValue.value = e;
    };
    const checkboxChange = (value, item) => {
      if (value.length > 6) {
        value.splice(6);
        checkboxValue.value = value;
        common_vendor.index.showToast({
          title: "最多选择6位乘客",
          icon: "none"
        });
      }
    };
    const handleAdd = () => {
      common_vendor.index.navigateTo({
        url: "/pages/my/passenger/index"
      });
    };
    const handleEdit = (row) => {
      common_vendor.index.navigateTo({
        url: `/pages/my/passenger/add/index?id=${row.passengerId}`
      });
    };
    const handleSubmit = () => {
      show.value = false;
      emits("select", checkboxValue.value);
    };
    __expose({ handleOpen });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => show.value = false),
        b: common_vendor.o(handleSubmit),
        c: common_vendor.p({
          name: "plus-circle-fill",
          color: "#2979ff",
          size: "26"
        }),
        d: common_vendor.o(handleAdd),
        e: common_vendor.f(paxList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: "4ca102ae-4-" + i0 + "," + ("4ca102ae-3-" + i0),
            c: common_vendor.o(($event) => handleEdit(item), item.passengerId),
            d: common_vendor.t(item.phone),
            e: item.passengerId,
            f: "4ca102ae-3-" + i0 + ",4ca102ae-2",
            g: common_vendor.p({
              name: item.passengerId
            })
          };
        }),
        f: common_vendor.p({
          name: "edit-pen-fill",
          size: "20"
        }),
        g: common_vendor.o(checkboxChange),
        h: common_vendor.o(($event) => checkboxValue.value = $event),
        i: common_vendor.p({
          placement: "column",
          shape: "circle",
          modelValue: checkboxValue.value
        }),
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
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/order/index/paxModule.js.map
