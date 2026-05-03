"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_u_tabs2 = common_vendor.resolveComponent("u-tabs");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_popup2 = common_vendor.resolveComponent("u-popup");
  (_easycom_u_tabs2 + _easycom_u_icon2 + _easycom_u_popup2)();
}
const _easycom_u_tabs = () => "../../node-modules/uview-plus/components/u-tabs/u-tabs.js";
const _easycom_u_icon = () => "../../node-modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_popup = () => "../../node-modules/uview-plus/components/u-popup/u-popup.js";
if (!Math) {
  (_easycom_u_tabs + _easycom_u_icon + _easycom_u_popup)();
}
const itemHeight = 300;
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  props: {
    data: {},
    stationList: {}
  },
  setup(__props, { expose: __expose }) {
    const show = common_vendor.ref(false);
    const scrollTop = common_vendor.ref(0);
    const currentTab = common_vendor.ref(0);
    const props = __props;
    const startStation = common_vendor.ref("");
    const passingStations = common_vendor.ref([]);
    const endStation = common_vendor.ref("");
    const expanded = common_vendor.ref(false);
    common_vendor.watchEffect(() => {
      var _a, _b;
      const list2 = props.stationList || [];
      if (!list2.length)
        return;
      startStation.value = ((_a = list2[0]) == null ? void 0 : _a.stationName) ?? "";
      endStation.value = ((_b = list2[list2.length - 1]) == null ? void 0 : _b.stationName) ?? "";
      passingStations.value = list2.length > 2 ? list2.slice(1, -1).map((item) => item.stationName) : [];
    });
    const list = common_vendor.ref([
      { name: "车次详情", id: "detail" },
      { name: "购票须知", id: "pay" },
      { name: "取票须知", id: "take" },
      { name: "退票须知", id: "retreat" }
    ]);
    const idToIndex = { detail: 0, pay: 1, take: 2, retreat: 3 };
    const indexToTop = [0, 300, 600, 900];
    const handleOpen = () => {
      show.value = true;
    };
    const handleTabs = (row) => {
      scrollTop.value = indexToTop[idToIndex[row.id]];
    };
    const onScroll = (e) => {
      const top = e.detail.scrollTop;
      const index = Math.round(top / itemHeight);
      if (index >= 0 && index <= 3 && index !== currentTab.value) {
        currentTab.value = index;
        common_vendor.index.__f__("log", "at components/tabsPanel/index.vue:183", currentTab.value);
      }
    };
    __expose({ handleOpen });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      return common_vendor.e({
        a: common_vendor.o(handleTabs),
        b: common_vendor.p({
          list: list.value,
          current: currentTab.value
        }),
        c: common_vendor.o(($event) => show.value = false),
        d: common_vendor.p({
          name: "close"
        }),
        e: common_vendor.unref(common_assets.busIcon),
        f: common_vendor.t(startStation.value),
        g: !expanded.value
      }, !expanded.value ? {
        h: common_vendor.t(passingStations.value.length),
        i: common_vendor.o(($event) => expanded.value = true)
      } : {}, {
        j: expanded.value
      }, expanded.value ? {
        k: common_vendor.f(passingStations.value, (station, index, i0) => {
          return {
            a: common_vendor.t(station),
            b: index
          };
        })
      } : {}, {
        l: expanded.value
      }, expanded.value ? {
        m: common_vendor.o(($event) => expanded.value = false)
      } : {}, {
        n: common_vendor.t(endStation.value),
        o: common_vendor.t((_a = _ctx.data) == null ? void 0 : _a.departTime),
        p: common_vendor.t((_b = _ctx.data) == null ? void 0 : _b.arriveTime),
        q: common_vendor.t((_c = _ctx.data) == null ? void 0 : _c.duration),
        r: common_vendor.t((_d = _ctx.data) == null ? void 0 : _d.vehicleType),
        s: common_vendor.unref(common_assets.payIcon),
        t: common_vendor.unref(common_assets.takeIcon),
        v: common_vendor.unref(common_assets.retreatIcon),
        w: scrollTop.value,
        x: common_vendor.o(onScroll),
        y: common_vendor.o(($event) => show.value = false),
        z: common_vendor.p({
          round: 15,
          mode: "bottom",
          show: show.value,
          closeOnClickOverlay: true
        })
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-17a8b4ee"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/tabsPanel/index.js.map
