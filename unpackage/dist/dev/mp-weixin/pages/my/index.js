"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
require("../../store/index.js");
const utils_my = require("../../utils/my.js");
const store_modules_user = require("../../store/modules/user.js");
if (!Array) {
  const _easycom_u_avatar2 = common_vendor.resolveComponent("u-avatar");
  _easycom_u_avatar2();
}
const _easycom_u_avatar = () => "../../node-modules/uview-plus/components/u-avatar/u-avatar.js";
if (!Math) {
  _easycom_u_avatar();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const userStore = store_modules_user.useUserStore();
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
        img: common_assets.eticketIcon,
        url: ""
      },
      {
        id: 2,
        // TS 改造备注：修复重复 id 为 2
        text: "常用旅客",
        img: common_assets.myticketIcon,
        url: "/pages/my/passenger/index"
      },
      {
        id: 3,
        text: "我的发票",
        img: common_assets.invoiceIcon,
        url: ""
      },
      {
        id: 4,
        text: "帮助中心",
        img: common_assets.myhelpIcon,
        url: ""
      },
      {
        id: 5,
        text: "客服中心",
        img: common_assets.searchticketIcon,
        url: ""
      },
      {
        id: 6,
        text: "关于我们",
        img: common_assets.aboutusIcon,
        url: ""
      },
      {
        id: 7,
        text: "推广中心",
        img: common_assets.extensionimgIcon,
        url: ""
      },
      {
        id: 8,
        text: "口令兑换",
        img: common_assets.shopIcon,
        url: ""
      }
    ]);
    const info = common_vendor.ref({});
    common_vendor.watch(userStore.userInfo, (newVal) => {
      info.value = newVal;
    }, { immediate: true, deep: true });
    common_vendor.onMounted(() => {
      common_vendor.index.__f__("log", "at pages/my/index.vue:153", userStore.userInfo);
    });
    const handleLogin = () => {
      common_vendor.index.navigateTo({
        url: "/pages/login/index"
      });
    };
    const handleOrderList = (value) => {
      common_vendor.index.navigateTo({
        url: `/pages/order/list/index?value=${value}`
      });
    };
    const handleReture = (url) => {
      if (!url)
        return common_vendor.index.showToast({
          title: "敬请期待",
          icon: "none"
        });
      common_vendor.index.navigateTo({
        url
      });
    };
    return (_ctx, _cache) => {
      var _a, _b;
      return common_vendor.e({
        a: common_vendor.unref(common_assets.myuserbackground),
        b: (_a = info.value) == null ? void 0 : _a.openid
      }, ((_b = info.value) == null ? void 0 : _b.openid) ? {
        c: common_vendor.p({
          src: info.value.avatar
        }),
        d: common_vendor.t(info.value.phone)
      } : {
        e: common_vendor.o(handleLogin)
      }, {
        f: common_vendor.f(common_vendor.unref(utils_my.orderStatus), (item, k0, i0) => {
          return {
            a: item.img,
            b: common_vendor.t(item.text),
            c: item.id,
            d: common_vendor.o(($event) => handleOrderList(item.value), item.id)
          };
        }),
        g: common_vendor.f(vipmesList, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.value),
            b: common_vendor.t(item.text),
            c: item.id
          };
        }),
        h: common_vendor.f(moreList, (item, k0, i0) => {
          return {
            a: item.img,
            b: common_vendor.t(item.text),
            c: item.id,
            d: common_vendor.o(($event) => handleReture(item.url), item.id)
          };
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f97bc692"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my/index.js.map
