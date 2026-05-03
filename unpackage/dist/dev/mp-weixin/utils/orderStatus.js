"use strict";
const orderStatusOptions = [
  {
    value: 0,
    label: "待付款"
  },
  {
    value: 1,
    label: "已支付"
  },
  {
    value: 2,
    label: "已出票"
  },
  {
    value: 3,
    label: "已取消"
  },
  {
    value: 4,
    label: "已退票"
  },
  {
    value: 5,
    label: "已出行"
  }
];
function getOrderStatusLabel(status) {
  const option = orderStatusOptions.find((item) => item.value === status);
  return (option == null ? void 0 : option.label) || "未知";
}
exports.getOrderStatusLabel = getOrderStatusLabel;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/orderStatus.js.map
