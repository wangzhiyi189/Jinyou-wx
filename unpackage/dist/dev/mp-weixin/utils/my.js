"use strict";
const common_assets = require("../common/assets.js");
const orderStatus = [
  {
    id: 1,
    text: "全部订单",
    img: common_assets.allorderIcon,
    url: "",
    value: 6
  },
  {
    id: 0,
    text: "待付款",
    img: common_assets.waitpayIcon,
    url: "",
    value: 0
  },
  {
    id: 1,
    text: "待出行",
    img: common_assets.waitgoIcon,
    url: "",
    value: 1
  },
  {
    id: 5,
    text: "已出行",
    img: common_assets.waitreviewIcon,
    url: "",
    value: 5
  }
];
exports.orderStatus = orderStatus;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/my.js.map
