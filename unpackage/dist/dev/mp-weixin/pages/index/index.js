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
  (_easycom_u_button + Recommend + _easycom_u_calendar)();
}
const Recommend = () => "../../components/recommend/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const locationStore = store_modules_location.useLocationStore();
    const swiperList = common_vendor.ref([
      {
        id: 1,
        img: "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00626-663.jpg"
      },
      {
        id: 2,
        img: "https://img2.baidu.com/it/u=4070310662,2064405952&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667"
      }
    ]);
    const carouselList = common_vendor.ref([
      {
        id: 1,
        img: "https://www.bus365.com/files/group1/M00/00/3D/CgoB7Vv9OCuAHDpWAAKqF2m8Nno599.png"
      },
      {
        id: 2,
        img: "https://img2.baidu.com/it/u=4070310662,2064405952&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667"
      }
    ]);
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
        if (info.type == "start") {
          formData.start_address = info.city;
        } else {
          formData.end_address = info.city;
        }
      });
      if (common_vendor.index.getMenuButtonBoundingClientRect()) {
        const systemInfo = common_vendor.index.getSystemInfoSync();
        const menuButtonInfo = common_vendor.index.getMenuButtonBoundingClientRect();
        btnTop.value = menuButtonInfo.top;
        btnRight.value = systemInfo.screenWidth - menuButtonInfo.right;
        btnHeight.value = menuButtonInfo.height;
      }
    });
    common_vendor.onUnmounted(() => {
      common_vendor.index.$off("updateData");
      common_vendor.index.__f__("log", "at pages/index/index.vue:128", "页面卸载，事件监听已移除");
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
      common_vendor.index.__f__("log", "at pages/index/index.vue:149", locationStore);
    };
    const getDate = (now = /* @__PURE__ */ new Date()) => {
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      formData.date = `${month}月${day}日`;
      const lunar = common_vendor.lunarJavascript.Lunar.fromDate(now);
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
      common_vendor.index.__f__("log", "at pages/index/index.vue:180", formData);
      common_vendor.index.navigateTo({ url: `/pages/tickets/index` });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handleLocation),
        b: btnTop.value * 2 + "rpx",
        c: btnHeight.value * 2 + "rpx",
        d: `rgba(0, 122, 255, ${opacity.value})`,
        e: common_vendor.f(swiperList.value, (item, k0, i0) => {
          return {
            a: item.img,
            b: item.id
          };
        }),
        f: common_vendor.t(formData.start_address || "选择出发地"),
        g: formData.start_address == "" ? 1 : "",
        h: common_vendor.o(($event) => handleSelectCity("start")),
        i: common_assets._imports_0,
        j: common_vendor.o(handleSwitch),
        k: common_vendor.t(formData.end_address || "选择目的地"),
        l: formData.end_address == "" ? 1 : "",
        m: common_vendor.o(($event) => handleSelectCity("end")),
        n: common_vendor.t(formData.date),
        o: common_vendor.t(formData.lunarDate),
        p: common_vendor.o(handleDatePicker),
        q: common_vendor.o(handleTickets),
        r: common_vendor.p({
          type: "primary",
          text: "开始搜索",
          shape: "circle"
        }),
        s: common_vendor.f(carouselList.value, (item, k0, i0) => {
          return {
            a: item.img,
            b: item.id
          };
        }),
        t: common_vendor.o(handleDateConfirm),
        v: common_vendor.o(handleDateClose),
        w: common_vendor.p({
          title: "选择出行时间",
          show: calendarShow.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
