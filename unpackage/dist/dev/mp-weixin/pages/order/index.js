"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _component_viwe = common_vendor.resolveComponent("viwe");
  const _easycom_u__input2 = common_vendor.resolveComponent("u--input");
  const _easycom_u_action_sheet2 = common_vendor.resolveComponent("u-action-sheet");
  (_easycom_u_navbar2 + _easycom_u_icon2 + _component_viwe + _easycom_u__input2 + _easycom_u_action_sheet2)();
}
const _easycom_u_navbar = () => "../../node-modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_u_icon = () => "../../node-modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u__input = () => "../../node-modules/uview-plus/components/u-input/u-input.js";
const _easycom_u_action_sheet = () => "../../node-modules/uview-plus/components/u-action-sheet/u-action-sheet.js";
if (!Math) {
  (_easycom_u_navbar + _easycom_u_icon + _easycom_u__input + _easycom_u_action_sheet)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const price = common_vendor.ref(0);
    const passengerShow = common_vendor.ref(false);
    common_vendor.ref([{
      text: "删除"
    }]);
    const passengerList = common_vendor.ref([
      {
        id: 1,
        name: "张三",
        code: "12345678"
      },
      {
        id: 2,
        name: "李四",
        code: "12345678"
      }
    ]);
    common_vendor.watch(() => passengerList.value.length, (newValue, oldValue) => {
      price.value = newValue * 70;
    }, { immediate: true });
    const handlePassenger = () => {
      passengerShow.value = true;
    };
    const handlePassengerDelete = (row) => {
      common_vendor.index.__f__("log", "at pages/order/index.vue:170", row);
      passengerList.value = passengerList.value.filter((item) => item.id !== row.id);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          bgColor: "#fff",
          leftIconColor: "#fff",
          title: "填写订单",
          autoBack: true,
          fixed: true,
          placeholder: true
        }),
        b: common_vendor.p({
          name: "volume",
          color: "#999",
          size: "28"
        }),
        c: common_vendor.unref(common_assets.topUnrulesImg),
        d: common_vendor.unref(common_assets.duiIcon),
        e: common_vendor.unref(common_assets.duiIcon),
        f: common_vendor.unref(common_assets.walletIcon),
        g: common_vendor.p({
          name: "plus-circle-fill"
        }),
        h: common_vendor.o(handlePassenger),
        i: common_vendor.f(passengerList.value, (item, k0, i0) => {
          return {
            a: "17a44f9d-4-" + i0 + "," + ("17a44f9d-3-" + i0),
            b: common_vendor.o(($event) => handlePassengerDelete(item), item.id),
            c: "17a44f9d-3-" + i0,
            d: common_vendor.t(item.name),
            e: common_vendor.t(item.code),
            f: item.id
          };
        }),
        j: common_vendor.p({
          name: "minus-circle-fill"
        }),
        k: common_vendor.unref(common_assets.phoneIcon),
        l: common_vendor.p({
          placeholder: "请输入联系手机",
          border: "0",
          clearable: true
        }),
        m: common_vendor.unref(common_assets.remarkIcon),
        n: common_vendor.p({
          name: "arrow-right"
        }),
        o: common_vendor.t(price.value),
        p: common_vendor.p({
          name: "plus-circle-fill"
        }),
        q: common_vendor.o(($event) => passengerShow.value = false),
        r: common_vendor.p({
          title: "常用旅客",
          round: "15",
          show: passengerShow.value,
          closeOnClickOverlay: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-17a44f9d"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/order/index.js.map
