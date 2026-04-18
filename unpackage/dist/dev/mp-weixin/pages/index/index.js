"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
require("../../store/index.js");
const store_modules_location = require("../../store/modules/location.js");
if (!Array) {
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_calendar2 = common_vendor.resolveComponent("u-calendar");
  (_easycom_u_button2 + _easycom_u_calendar2)();
}
const _easycom_u_button = () => "../../node-modules/uview-plus/components/u-button/u-button.js";
const _easycom_u_calendar = () => "../../node-modules/uview-plus/components/u-calendar/u-calendar.js";
if (!Math) {
  (TopBannerModel + _easycom_u_button + BannerModel + Recommend + _easycom_u_calendar)();
}
const Recommend = () => "../../components/recommend/index.js";
const TopBannerModel = () => "./topBanner.js";
const BannerModel = () => "./banner.js";
const _sfc_defineComponent = common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const { Lunar } = common_vendor.LunarJS;
    const locationStore = store_modules_location.useLocationStore();
    const btnTop = common_vendor.ref(20);
    const btnRight = common_vendor.ref(0);
    const btnHeight = common_vendor.ref(50);
    const calendarShow = common_vendor.ref(false);
    const opacity = common_vendor.ref(0);
    const formData = common_vendor.reactive({
      start_address: "",
      end_address: "",
      date: "",
      lunarDate: ""
    });
    common_vendor.onMounted(() => {
      getDate();
      common_vendor.index.$on("updateData", (data) => {
        const info = data.value;
        if (!info)
          return;
        if (info.type === "start") {
          formData.start_address = info.city;
        } else {
          formData.end_address = info.city;
        }
      });
      const menuButtonInfo = common_vendor.index.getMenuButtonBoundingClientRect();
      if (menuButtonInfo) {
        const systemInfo = common_vendor.index.getSystemInfoSync();
        btnTop.value = menuButtonInfo.top;
        btnRight.value = systemInfo.screenWidth - menuButtonInfo.right;
        btnHeight.value = menuButtonInfo.height;
      }
    });
    common_vendor.onUnmounted(() => {
      common_vendor.index.$off("updateData");
    });
    common_vendor.onPageScroll((e) => {
      const scrollTop = e.scrollTop;
      const max = 80;
      let op = scrollTop / max;
      if (op > 1)
        op = 1;
      opacity.value = op;
    });
    const handleLocation = async () => {
      await locationStore.getCurrentAddress();
      common_vendor.index.__f__("log", "at pages/index/index.vue:140", locationStore);
    };
    const getDate = (now = /* @__PURE__ */ new Date()) => {
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      formData.date = `${month}月${day}日`;
      const lunar = Lunar.fromDate(now);
      formData.lunarDate = `${lunar.getMonthInChinese()}月${lunar.getDayInChinese()}`;
    };
    const handleSwitch = () => {
      [formData.start_address, formData.end_address] = [formData.end_address, formData.start_address];
    };
    const handleDatePicker = () => {
      calendarShow.value = true;
    };
    const handleDateClose = () => {
      calendarShow.value = false;
    };
    const handleDateConfirm = (date) => {
      const newDate = new Date(date);
      getDate(newDate);
      handleDateClose();
    };
    const handleSelectCity = (e) => {
      common_vendor.index.navigateTo({ url: `/pages/selectCity/index?type=${e}` });
    };
    const handleTickets = () => {
      common_vendor.index.__f__("log", "at pages/index/index.vue:178", formData);
      common_vendor.index.navigateTo({ url: `/pages/tickets/index` });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handleLocation),
        b: btnTop.value * 2 + "rpx",
        c: btnHeight.value * 2 + "rpx",
        d: `rgba(0, 122, 255, ${opacity.value})`,
        e: common_vendor.t(formData.start_address || "选择出发地"),
        f: formData.start_address == "" ? 1 : "",
        g: common_vendor.o(($event) => handleSelectCity("start")),
        h: common_assets._imports_0,
        i: common_vendor.o(handleSwitch),
        j: common_vendor.t(formData.end_address || "选择目的地"),
        k: formData.end_address == "" ? 1 : "",
        l: common_vendor.o(($event) => handleSelectCity("end")),
        m: common_vendor.t(formData.date),
        n: common_vendor.t(formData.lunarDate),
        o: common_vendor.o(handleDatePicker),
        p: common_vendor.o(handleTickets),
        q: common_vendor.p({
          type: "primary",
          text: "开始搜索",
          shape: "circle"
        }),
        r: common_vendor.o(handleDateConfirm),
        s: common_vendor.o(handleDateClose),
        t: common_vendor.p({
          title: "选择出行时间",
          show: calendarShow.value
        })
      };
    };
  }
});
_sfc_defineComponent.__runtimeHooks = 1;
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_defineComponent, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
