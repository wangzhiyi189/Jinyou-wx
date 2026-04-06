"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  _easycom_u_navbar2();
}
const _easycom_u_navbar = () => "../../node-modules/uview-plus/components/u-navbar/u-navbar.js";
if (!Math) {
  _easycom_u_navbar();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      leftIconColor: "#fff",
      title: _ctx.title,
      autoBack: true,
      fixed: true,
      placeholder: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/login.js.map
