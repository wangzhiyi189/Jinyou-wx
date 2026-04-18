"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const orderList = common_vendor.reactive([
      {
        id: 1,
        text: "全部订单",
        img: common_assets.allorderIcon
      },
      {
        id: 2,
        text: "待付款",
        img: common_assets.waitpayIcon
      },
      {
        id: 3,
        text: "待出行",
        img: common_assets.waitgoIcon
      },
      {
        id: 4,
        text: "待点评",
        img: common_assets.waitreviewIcon
      }
    ]);
    const vipmesList = common_vendor.reactive([
      {
        id: 1,
        text: "优惠券",
        value: 0
      },
      {
        id: 2,
        text: "积分",
        value: 0
      },
      {
        id: 3,
        text: "金币",
        value: 0
      }
    ]);
    const moreList = common_vendor.reactive([
      {
        id: 1,
        text: "电子客票",
        img: common_assets.eticketIcon
      },
      {
        id: 2,
        // TS 改造备注：修复重复 id 为 2
        text: "常用旅客",
        img: common_assets.myticketIcon
      },
      {
        id: 3,
        text: "我的发票",
        img: common_assets.invoiceIcon
      },
      {
        id: 4,
        text: "帮助中心",
        img: common_assets.myhelpIcon
      },
      {
        id: 5,
        text: "客服中心",
        img: common_assets.searchticketIcon
      },
      {
        id: 6,
        text: "关于我们",
        img: common_assets.aboutusIcon
      },
      {
        id: 7,
        text: "推广中心",
        img: common_assets.extensionimgIcon
      },
      {
        id: 8,
        text: "口令兑换",
        img: common_assets.shopIcon
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(common_assets.myuserbackground),
        b: common_vendor.f(orderList, (item, k0, i0) => {
          return {
            a: item.img,
            b: common_vendor.t(item.text),
            c: item.id
          };
        }),
        c: common_vendor.f(vipmesList, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.value),
            b: common_vendor.t(item.text),
            c: item.id
          };
        }),
        d: common_vendor.f(moreList, (item, k0, i0) => {
          return {
            a: item.img,
            b: common_vendor.t(item.text),
            c: item.id
          };
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f97bc692"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my/index.js.map
