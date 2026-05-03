"use strict";
const common_vendor = require("../../../common/vendor.js");
const api_core_order = require("../../../api/core/order.js");
const utils_date = require("../../../utils/date.js");
const utils_payment = require("../../../utils/payment.js");
if (!Array) {
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  const _easycom_u_count_down2 = common_vendor.resolveComponent("u-count-down");
  const _easycom_u_radio2 = common_vendor.resolveComponent("u-radio");
  const _easycom_u_radio_group2 = common_vendor.resolveComponent("u-radio-group");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  (_easycom_u_navbar2 + _easycom_u_count_down2 + _easycom_u_radio2 + _easycom_u_radio_group2 + _easycom_u_button2)();
}
const _easycom_u_navbar = () => "../../../node-modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_u_count_down = () => "../../../node-modules/uview-plus/components/u-count-down/u-count-down.js";
const _easycom_u_radio = () => "../../../node-modules/uview-plus/components/u-radio/u-radio.js";
const _easycom_u_radio_group = () => "../../../node-modules/uview-plus/components/u-radio-group/u-radio-group.js";
const _easycom_u_button = () => "../../../node-modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  (_easycom_u_navbar + _easycom_u_count_down + _easycom_u_radio + _easycom_u_radio_group + _easycom_u_button)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    common_vendor.index.__f__("log", "at pages/order/payment/index.vue:58", utils_payment.paymentOptains);
    const orderNo = common_vendor.ref();
    const info = common_vendor.ref();
    const dateInfo = common_vendor.ref();
    const dateExprie = common_vendor.ref(0);
    const radioValue = common_vendor.ref(utils_payment.paymentOptains[0].id);
    common_vendor.onLoad((options) => {
      orderNo.value = options.orderNo;
      requestDetail();
    });
    const requestDetail = async () => {
      if (!orderNo.value) {
        common_vendor.index.showToast({
          title: "订单号不存在",
          icon: "error"
        });
        return;
      }
      const { data, code, msg } = await api_core_order.getOrderDetail({ orderNo: orderNo.value });
      const date = utils_date.getDepartTime(data.departureTime);
      const diffMs = new Date(data.expireTime).getTime() - Date.now();
      common_vendor.index.__f__("log", "at pages/order/payment/index.vue:81", dateExprie.value);
      dateExprie.value = diffMs;
      if (dateExprie.value <= 0) {
        handleExpire();
      }
      dateInfo.value = date;
      info.value = data;
    };
    const handleFinish = () => {
      if (dateExprie.value == 0)
        return;
      handleExpire();
    };
    const handleSubmit = async () => {
      common_vendor.index.__f__("log", "at pages/order/payment/index.vue:97", radioValue.value);
      const { data, code, msg } = await api_core_order.postPayOrder({
        orderNo: orderNo.value
      });
      common_vendor.index.__f__("log", "at pages/order/payment/index.vue:101", data, code, msg);
      return;
    };
    const handleExpire = () => {
      common_vendor.index.showToast({
        title: "订单已过期",
        icon: "error"
      });
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e;
      return {
        a: common_vendor.p({
          bgColor: "#fff",
          leftIconColor: "#fff",
          title: "支付订单",
          autoBack: true,
          fixed: true,
          placeholder: true
        }),
        b: common_vendor.t((_a = dateInfo.value) == null ? void 0 : _a.dateData.date),
        c: common_vendor.t((_b = dateInfo.value) == null ? void 0 : _b.dateData.week),
        d: common_vendor.t((_c = dateInfo.value) == null ? void 0 : _c.hourMinute),
        e: common_vendor.t((_d = info.value) == null ? void 0 : _d.boardPointName),
        f: common_vendor.o(handleFinish),
        g: common_vendor.p({
          time: dateExprie.value,
          format: "mm:ss"
        }),
        h: common_vendor.t((_e = info.value) == null ? void 0 : _e.totalAmount),
        i: common_vendor.f(common_vendor.unref(utils_payment.paymentOptains), (item, k0, i0) => {
          return {
            a: item.icon,
            b: common_vendor.t(item.name),
            c: "c35076bf-3-" + i0 + ",c35076bf-2",
            d: common_vendor.p({
              name: item.id,
              ["active-color"]: "red",
              ["icon-placement"]: "right"
            }),
            e: item.id,
            f: common_vendor.o(($event) => radioValue.value = item.id, item.id)
          };
        }),
        j: common_vendor.o(($event) => radioValue.value = $event),
        k: common_vendor.p({
          iconPlacement: "right",
          modelValue: radioValue.value
        }),
        l: common_vendor.o(handleSubmit),
        m: common_vendor.p({
          type: "primary"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c35076bf"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/order/payment/index.js.map
