"use strict";
const common_vendor = require("../../../common/vendor.js");
const api_core_order = require("../../../api/core/order.js");
const utils_date = require("../../../utils/date.js");
const common_assets = require("../../../common/assets.js");
if (!Array) {
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_count_down2 = common_vendor.resolveComponent("u-count-down");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  (_easycom_u_navbar2 + _easycom_u_icon2 + _easycom_u_count_down2 + _easycom_u_button2)();
}
const _easycom_u_navbar = () => "../../../node-modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_u_icon = () => "../../../node-modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_count_down = () => "../../../node-modules/uview-plus/components/u-count-down/u-count-down.js";
const _easycom_u_button = () => "../../../node-modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  (_easycom_u_navbar + _easycom_u_icon + _easycom_u_count_down + _easycom_u_button + TabsPanel + OrderInfoModule + AmountModule)();
}
const TabsPanel = () => "../../../components/tabsPanel/index.js";
const OrderInfoModule = () => "./orderInfoModule.js";
const AmountModule = () => "./amountModule.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const title = common_vendor.ref("订单详情");
    const info = common_vendor.ref();
    const dateInfo = common_vendor.ref();
    const dateExprie = common_vendor.ref(0);
    const orderNo = common_vendor.ref();
    const infoDetail = common_vendor.ref([]);
    const totalDate = common_vendor.ref("");
    const boardPointName = common_vendor.ref("");
    const passengerName = common_vendor.ref("");
    const passengerList = common_vendor.ref([]);
    const tabsPanelRef = common_vendor.ref();
    const orderInfoModuleRef = common_vendor.ref();
    const amountModuleRef = common_vendor.ref();
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
      if (code != 200)
        return common_vendor.index.showToast({
          title: msg,
          icon: "error"
        });
      const date = utils_date.getDepartTime(data.departTime);
      infoDetail.value = data.stationInfo;
      if (data.orderStatus == 0) {
        const diffMs = new Date(data.expireTime).getTime() - Date.now();
        dateExprie.value = diffMs;
      }
      dateInfo.value = date;
      info.value = data;
      totalDate.value = utils_date.getTimeInterval(data.departTime, data.arriveTime).simpleFormat;
      boardPointName.value = data.stationInfo.filter((item) => item.stationId == data.boardPointId)[0].stationName;
      passengerList.value = JSON.parse(data.passengerSnapshot);
      passengerName.value = passengerList.value.map((p) => p.name).join(",");
    };
    const handleReserve = () => {
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
    };
    const handlePayOrder = () => {
      common_vendor.index.navigateTo({
        url: `/pages/order/payment/index?orderNo=${info.value.orderNo}`
      });
    };
    const handlePayCancel = async () => {
      const { code, msg, data } = await api_core_order.postOrderCancel(info.value.orderNo);
      common_vendor.index.__f__("log", "at pages/order/detail/index.vue:245", code, msg, data);
      if (code == 200) {
        requestDetail();
        common_vendor.index.showToast({
          title: "取消成功",
          icon: "success"
        });
      } else {
        common_vendor.index.showToast({
          title: msg,
          icon: "error"
        });
      }
    };
    const handleFinish = () => {
      common_vendor.index.__f__("log", "at pages/order/detail/index.vue:261", "倒计时结束");
    };
    const handleDetailInfo = () => {
      tabsPanelRef.value.handleOpen();
    };
    const handleOrderInfo = () => {
      orderInfoModuleRef.value.handleOpen();
    };
    const handleAmountInfo = (e) => {
      amountModuleRef.value.handleOpen(e);
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A;
      return common_vendor.e({
        a: common_vendor.p({
          leftIconColor: "#fff",
          title: title.value,
          autoBack: true,
          fixed: true,
          placeholder: true
        }),
        b: ((_a = info.value) == null ? void 0 : _a.orderStatus) == 0
      }, ((_b = info.value) == null ? void 0 : _b.orderStatus) == 0 ? {
        c: common_vendor.p({
          name: "rmb-circle"
        }),
        d: common_vendor.o(handleFinish),
        e: common_vendor.p({
          time: dateExprie.value,
          format: "mm:ss"
        })
      } : {}, {
        f: ((_c = info.value) == null ? void 0 : _c.orderStatus) == 3
      }, ((_d = info.value) == null ? void 0 : _d.orderStatus) == 3 ? {
        g: common_vendor.p({
          name: "close-circle"
        })
      } : {}, {
        h: ((_e = info.value) == null ? void 0 : _e.orderStatus) == 1
      }, ((_f = info.value) == null ? void 0 : _f.orderStatus) == 1 ? {
        i: common_vendor.p({
          name: "pause-circle"
        })
      } : {}, {
        j: ((_g = info.value) == null ? void 0 : _g.orderStatus) == 5
      }, ((_h = info.value) == null ? void 0 : _h.orderStatus) == 5 ? {
        k: common_vendor.p({
          name: "checkmark-circle"
        })
      } : {}, {
        l: common_vendor.t((_i = dateInfo.value) == null ? void 0 : _i.dateData.date),
        m: common_vendor.t((_j = dateInfo.value) == null ? void 0 : _j.dateData.week),
        n: common_vendor.t((_k = dateInfo.value) == null ? void 0 : _k.hourMinute),
        o: common_vendor.t((_l = info.value) == null ? void 0 : _l.totalAmount),
        p: common_vendor.t((_n = (_m = info.value) == null ? void 0 : _m.stationInfo[0]) == null ? void 0 : _n.stationName),
        q: common_vendor.t((_p = (_o = info.value) == null ? void 0 : _o.stationInfo[info.value.stationInfo.length - 1]) == null ? void 0 : _p.stationName),
        r: common_vendor.p({
          name: "clock"
        }),
        s: common_vendor.t(totalDate.value),
        t: ((_q = info.value) == null ? void 0 : _q.orderStatus) != 0 && ((_r = info.value) == null ? void 0 : _r.orderStatus) != 3
      }, ((_s = info.value) == null ? void 0 : _s.orderStatus) != 0 && ((_t = info.value) == null ? void 0 : _t.orderStatus) != 3 ? {
        v: common_vendor.p({
          name: "car"
        }),
        w: common_vendor.t((_u = info.value) == null ? void 0 : _u.plateNumber)
      } : {}, {
        x: common_vendor.unref(common_assets.topUnrulesImg),
        y: common_vendor.p({
          name: "info-circle"
        }),
        z: common_vendor.p({
          name: "arrow-right"
        }),
        A: common_vendor.o(handleDetailInfo),
        B: common_vendor.p({
          name: "order"
        }),
        C: common_vendor.p({
          name: "arrow-right"
        }),
        D: common_vendor.o(handleOrderInfo),
        E: common_vendor.p({
          name: "rmb-circle"
        }),
        F: common_vendor.p({
          name: "arrow-right"
        }),
        G: common_vendor.o(($event) => handleAmountInfo(1)),
        H: common_vendor.unref(common_assets.passengerImg),
        I: common_vendor.t(passengerName.value),
        J: common_vendor.p({
          name: "arrow-right"
        }),
        K: common_vendor.o(($event) => handleAmountInfo(2)),
        L: common_vendor.unref(common_assets.addressImg),
        M: common_vendor.t(boardPointName.value),
        N: common_vendor.p({
          name: "arrow-right"
        }),
        O: common_vendor.unref(common_assets.phoneIcon),
        P: common_vendor.t(info.value.contactPhone),
        Q: ((_v = info.value) == null ? void 0 : _v.orderStatus) == 0
      }, ((_w = info.value) == null ? void 0 : _w.orderStatus) == 0 ? {
        R: common_vendor.o(handlePayCancel),
        S: common_vendor.o(handlePayOrder),
        T: common_vendor.p({
          type: "primary"
        })
      } : {}, {
        U: ((_x = info.value) == null ? void 0 : _x.orderStatus) == 3 || ((_y = info.value) == null ? void 0 : _y.orderStatus) == 5
      }, ((_z = info.value) == null ? void 0 : _z.orderStatus) == 3 || ((_A = info.value) == null ? void 0 : _A.orderStatus) == 5 ? {
        V: common_vendor.o(handleReserve),
        W: common_vendor.p({
          type: "primary"
        })
      } : {}, {
        X: common_vendor.sr(tabsPanelRef, "3b54fdf1-19", {
          "k": "tabsPanelRef"
        }),
        Y: common_vendor.p({
          data: info.value,
          stationList: infoDetail.value
        }),
        Z: common_vendor.sr(orderInfoModuleRef, "3b54fdf1-20", {
          "k": "orderInfoModuleRef"
        }),
        aa: common_vendor.p({
          data: info.value
        }),
        ab: common_vendor.sr(amountModuleRef, "3b54fdf1-21", {
          "k": "amountModuleRef"
        }),
        ac: common_vendor.p({
          data: info.value,
          passenger: passengerList.value
        })
      });
    };
  }
});
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/order/detail/index.js.map
