"use strict";
const common_vendor = require("../../common/vendor.js");
const api_core_ticket = require("../../api/core/ticket.js");
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
    const active = common_vendor.ref(0);
    const calendarShow = common_vendor.ref(false);
    const listData = common_vendor.ref([]);
    common_vendor.onMounted(() => {
      dateList.value = getDaysIn15Days(15);
      requestTicketList();
    });
    const requestTicketList = async () => {
      const { message, data, code } = await api_core_ticket.getTicketList({
        startCity: "洪洞",
        endCity: "小店",
        departDate: "2026-4-19"
      });
      common_vendor.index.__f__("log", "at pages/tickets/index.vue:69", data);
      listData.value = data;
    };
    common_vendor.onLoad((options) => {
      console.group(options);
    });
    common_vendor.onReachBottom(() => {
      common_vendor.index.__f__("log", "at pages/tickets/index.vue:77", "触底了");
    });
    const getDaysIn15Days = (num) => {
      const week = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
      const today = /* @__PURE__ */ new Date();
      return Array.from({ length: num }, (_, i) => {
        const d = new Date(today.getTime() + i * 864e5);
        const m = String(d.getMonth() + 1).padStart(2, "0");
        const day = String(d.getDate()).padStart(2, "0");
        return {
          date: `${m}-${day}`,
          week: i === 0 ? "今天" : week[d.getDay()]
        };
      });
    };
    const handleTabChange = (e) => {
      common_vendor.index.__f__("log", "at pages/tickets/index.vue:93", e);
    };
    const handleCalendar = () => {
      requestTicketList();
    };
    const handleDateClose = () => {
      calendarShow.value = false;
    };
    const handleDateConfirm = (e) => {
      common_vendor.index.__f__("log", "at pages/tickets/index.vue:103", e);
      active.value = 8;
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
          show: calendarShow.value
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
