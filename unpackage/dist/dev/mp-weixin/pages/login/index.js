"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../store/index.js");
const store_modules_user = require("../../store/modules/user.js");
if (!Array) {
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_checkbox2 = common_vendor.resolveComponent("u-checkbox");
  const _easycom_u_checkbox_group2 = common_vendor.resolveComponent("u-checkbox-group");
  (_easycom_u_navbar2 + _easycom_u_button2 + _easycom_u_checkbox2 + _easycom_u_checkbox_group2)();
}
const _easycom_u_navbar = () => "../../node-modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_u_button = () => "../../node-modules/uview-plus/components/u-button/u-button.js";
const _easycom_u_checkbox = () => "../../node-modules/uview-plus/components/u-checkbox/u-checkbox.js";
const _easycom_u_checkbox_group = () => "../../node-modules/uview-plus/components/u-checkbox-group/u-checkbox-group.js";
if (!Math) {
  (_easycom_u_navbar + _easycom_u_button + _easycom_u_checkbox + _easycom_u_checkbox_group)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const userStore = store_modules_user.useUserStore();
    const title = common_vendor.ref("授权登录");
    const checked = common_vendor.ref(false);
    const handleSubmit = async () => {
      userStore.login();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          leftIconColor: "#fff",
          title: title.value,
          autoBack: true,
          fixed: true,
          placeholder: true
        }),
        b: common_vendor.o(handleSubmit),
        c: common_vendor.p({
          type: "primary",
          ghost: true
        }),
        d: common_vendor.p({
          shape: "square"
        }),
        e: common_vendor.o(($event) => checked.value = $event),
        f: common_vendor.p({
          placement: "column",
          modelValue: checked.value
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d08ef7d4"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/index.js.map
