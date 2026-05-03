"use strict";
const common_vendor = require("../../../common/vendor.js");
const api_core_passenger = require("../../../api/core/passenger.js");
if (!Array) {
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  (_easycom_u_navbar2 + _easycom_u_icon2)();
}
const _easycom_u_navbar = () => "../../../node-modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_u_icon = () => "../../../node-modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  (_easycom_u_navbar + _easycom_u_icon)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props, { expose: __expose }) {
    const title = common_vendor.ref("乘客信息");
    const passengerList = common_vendor.ref();
    common_vendor.onMounted(() => {
      requestPassenger();
    });
    const requestPassenger = async () => {
      const { data, code, msg } = await api_core_passenger.getPassengerList();
      passengerList.value = data;
    };
    const handleAdd = () => {
      common_vendor.index.navigateTo({
        url: "/pages/my/passenger/add/index"
      });
    };
    const handleEdit = (id) => {
      common_vendor.index.navigateTo({
        url: `/pages/my/passenger/add/index?id=${id}`
      });
    };
    const handleDelete = (id) => {
      common_vendor.index.showModal({
        title: "提示",
        content: "确定删除吗？",
        success: async function(res) {
          if (res.confirm) {
            const { data, code, msg } = await api_core_passenger.postPassengerDelete(id);
            common_vendor.index.__f__("log", "at pages/my/passenger/index.vue:58", data, code, msg);
            common_vendor.index.showToast({
              title: msg,
              icon: "none"
            });
            if (code === 200) {
              requestPassenger();
            }
          } else if (res.cancel)
            ;
        }
      });
    };
    __expose({
      requestPassenger
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          leftIconColor: "#fff",
          title: title.value,
          autoBack: true,
          fixed: true,
          placeholder: true
        }),
        b: common_vendor.o(handleAdd),
        c: common_vendor.f(passengerList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item == null ? void 0 : item.name),
            b: common_vendor.t(item == null ? void 0 : item.phone),
            c: common_vendor.o(($event) => handleEdit(item.passengerId), item == null ? void 0 : item.passengerId),
            d: "3ff70745-1-" + i0,
            e: common_vendor.o(($event) => handleDelete(item.passengerId), item == null ? void 0 : item.passengerId),
            f: "3ff70745-2-" + i0,
            g: item == null ? void 0 : item.passengerId
          };
        }),
        d: common_vendor.p({
          name: "edit-pen"
        }),
        e: common_vendor.p({
          name: "trash"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3ff70745"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/my/passenger/index.js.map
