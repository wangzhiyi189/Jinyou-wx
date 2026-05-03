"use strict";
const common_vendor = require("../../common/vendor.js");
const api_core_ticket = require("../../api/core/ticket.js");
const utils_date = require("../../utils/date.js");
if (!Array) {
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_tabs2 = common_vendor.resolveComponent("u-tabs");
  const _easycom_u_empty2 = common_vendor.resolveComponent("u-empty");
  const _easycom_u_calendar2 = common_vendor.resolveComponent("u-calendar");
  const _easycom_u_modal2 = common_vendor.resolveComponent("u-modal");
  (_easycom_u_navbar2 + _easycom_u_icon2 + _easycom_u_tabs2 + _easycom_u_empty2 + _easycom_u_calendar2 + _easycom_u_modal2)();
}
const _easycom_u_navbar = () => "../../node-modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_u_icon = () => "../../node-modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_tabs = () => "../../node-modules/uview-plus/components/u-tabs/u-tabs.js";
const _easycom_u_empty = () => "../../node-modules/uview-plus/components/u-empty/u-empty.js";
const _easycom_u_calendar = () => "../../node-modules/uview-plus/components/u-calendar/u-calendar.js";
const _easycom_u_modal = () => "../../node-modules/uview-plus/components/u-modal/u-modal.js";
if (!Math) {
  (_easycom_u_navbar + _easycom_u_icon + _easycom_u_tabs + ticketCard + _easycom_u_empty + _easycom_u_calendar + _easycom_u_modal)();
}
const ticketCard = () => "../../components/ticketCard/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const title = common_vendor.ref("购买车票");
    const dateList = common_vendor.ref([]);
    const active = common_vendor.ref(2);
    const calendarShow = common_vendor.ref(false);
    const listData = common_vendor.ref([]);
    const formData = common_vendor.reactive({
      startCity: "",
      endCity: "",
      departDate: ""
    });
    common_vendor.onMounted(() => {
      common_vendor.index.__f__("log", "at pages/tickets/index.vue:62", formData.departDate);
      dateList.value = utils_date.getDays(8);
      common_vendor.index.__f__("log", "at pages/tickets/index.vue:64", dateList.value);
      active.value = handleActive(formData.departDate);
    });
    common_vendor.onLoad((options) => {
      formData.departDate = options.time;
      formData.startCity = options.start;
      formData.endCity = options.end;
      requestTicketList();
    });
    common_vendor.onShow(() => {
      const app = getApp();
      if (app.globalData.needRefreshTicketList) {
        requestTicketList();
        app.globalData.needRefreshTicketList = false;
      }
    });
    const requestTicketList = async () => {
      common_vendor.index.__f__("log", "at pages/tickets/index.vue:83", formData);
      const { message, data, code } = await api_core_ticket.getTicketList(formData);
      common_vendor.index.__f__("log", "at pages/tickets/index.vue:85", data);
      listData.value = data;
    };
    const handleActive = (e) => {
      const monthDay = e.slice(5);
      return dateList.value.findIndex((item) => item.date === monthDay);
    };
    common_vendor.onReachBottom(() => {
      common_vendor.index.__f__("log", "at pages/tickets/index.vue:94", "触底了");
    });
    const handleTabChange = (e) => {
      formData.departDate = formatToBackendDate(e.date);
      requestTicketList();
    };
    const formatToBackendDate = (dateStr) => {
      const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
      return `${currentYear}-${dateStr}`;
    };
    const handleCalendar = () => {
      calendarShow.value = true;
    };
    const handleDateClose = () => {
      calendarShow.value = false;
    };
    const handleDateConfirm = (e) => {
      formData.departDate = e[0];
      active.value = handleActive(e[0]);
      requestTicketList();
      handleDateClose();
    };
    const tipShow = common_vendor.ref(false);
    const TipTitle = common_vendor.ref("温馨提示");
    const TipContent = common_vendor.ref("耗时仅供参考，实际时间可能会有所不同，请合理安排出行时间。");
    const handleUnit = () => {
      tipShow.value = true;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          leftIconColor: "#fff",
          title: title.value,
          autoBack: true,
          fixed: true,
          placeholder: true
        }),
        b: common_vendor.w(({
          item
        }, s0, i0) => {
          return {
            a: common_vendor.t(item.date),
            b: common_vendor.t(item.week),
            c: i0,
            d: s0
          };
        }, {
          name: "d",
          path: "b",
          vueId: "aa2aed77-1"
        }),
        c: common_vendor.o(handleCalendar),
        d: common_vendor.p({
          name: "calendar",
          size: "30px",
          color: "#fff"
        }),
        e: common_vendor.o(() => {
        }),
        f: common_vendor.o(handleTabChange),
        g: common_vendor.p({
          current: active.value,
          list: dateList.value,
          scrollable: true
        }),
        h: listData.value.length > 0
      }, listData.value.length > 0 ? {
        i: common_vendor.f(listData.value, (item, k0, i0) => {
          return {
            a: common_vendor.o(handleUnit, item.scheduleId),
            b: "aa2aed77-3-" + i0,
            c: common_vendor.p({
              data: item
            }),
            d: item.scheduleId
          };
        })
      } : {
        j: common_vendor.p({
          mode: "search",
          text: "亲未查询到可售班次"
        })
      }, {
        k: common_vendor.o(handleDateConfirm),
        l: common_vendor.o(handleDateClose),
        m: common_vendor.p({
          title: "选择出行时间",
          defaultDate: formData.departDate,
          show: calendarShow.value,
          maxDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1e3).toISOString().slice(0, 10)
        }),
        n: common_vendor.o(($event) => tipShow.value = false),
        o: common_vendor.p({
          show: tipShow.value,
          title: TipTitle.value,
          content: TipContent.value
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-aa2aed77"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/tickets/index.js.map
