"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_date = require("../../utils/date.js");
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
  props: {
    data: Object
  },
  emits: ["unit"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isPassed = common_vendor.ref(false);
    const isNoTicket = common_vendor.ref(false);
    common_vendor.onMounted(() => {
    });
    common_vendor.watch(props.data, (newVal) => {
      var _a, _b;
      isPassed.value = utils_date.isDepartTimePassed((_a = props.data) == null ? void 0 : _a.departTime);
      if (((_b = props.data) == null ? void 0 : _b.seatRemaining) == 0) {
        isNoTicket.value = true;
      }
    }, { immediate: true });
    const handleDetail = () => {
      var _a;
      if (isPassed.value)
        return common_vendor.index.showToast({
          title: "已过发车时间，请更换出行日期",
          icon: "none"
        });
      if (isNoTicket.value)
        return common_vendor.index.showToast({
          title: "该班次余票不足，请选择其他班次",
          icon: "none"
        });
      const id = (_a = props.data) == null ? void 0 : _a.scheduleId;
      common_vendor.index.navigateTo({ url: `/pages/order/index/index?id=${id}` });
    };
    const cityJson = (e) => {
      let cityArray = JSON.parse(e);
      return cityArray[cityArray.length - 1];
    };
    const dateFormat = (e) => {
      const date = new Date(e);
      const hour = date.getHours().toString().padStart(2, "0");
      const minute = date.getMinutes().toString().padStart(2, "0");
      const result = `${hour}:${minute}`;
      return result;
    };
    const handleUnit = () => {
      emit("unit");
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f;
      return common_vendor.e({
        a: common_vendor.t(dateFormat((_a = __props.data) == null ? void 0 : _a.departTime)),
        b: common_vendor.t(dateFormat((_b = __props.data) == null ? void 0 : _b.arriveTime)),
        c: common_vendor.o(handleUnit),
        d: common_vendor.p({
          name: "info-circle"
        }),
        e: common_vendor.o(() => {
        }),
        f: common_vendor.t(cityJson((_c = __props.data) == null ? void 0 : _c.startCity)),
        g: common_vendor.t(cityJson((_d = __props.data) == null ? void 0 : _d.endCity)),
        h: common_vendor.t((_e = __props.data) == null ? void 0 : _e.price),
        i: isNoTicket.value
      }, isNoTicket.value ? {} : isPassed.value ? {} : {
        k: common_vendor.t((_f = __props.data) == null ? void 0 : _f.seatRemaining)
      }, {
        j: isPassed.value,
        l: common_vendor.n(!isPassed.value && !isNoTicket.value || "expired"),
        m: common_vendor.o(handleDetail)
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9828ffe1"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/ticketCard/index.js.map
