"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const api_core_ticket = require("../../../api/core/ticket.js");
const api_core_passenger = require("../../../api/core/passenger.js");
const api_core_order = require("../../../api/core/order.js");
const utils_date = require("../../../utils/date.js");
if (!Array) {
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_input2 = common_vendor.resolveComponent("u-input");
  const _easycom_u_picker2 = common_vendor.resolveComponent("u-picker");
  (_easycom_u_navbar2 + _easycom_u_icon2 + _easycom_u_input2 + _easycom_u_picker2)();
}
const _easycom_u_navbar = () => "../../../node-modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_u_icon = () => "../../../node-modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_input = () => "../../../node-modules/uview-plus/components/u-input/u-input.js";
const _easycom_u_picker = () => "../../../node-modules/uview-plus/components/u-picker/u-picker.js";
if (!Math) {
  (_easycom_u_navbar + _easycom_u_icon + _easycom_u_input + PaxModule + RmkModule + common_vendor.unref(TabsPanel) + _easycom_u_picker)();
}
const PaxModule = () => "./paxModule.js";
const RmkModule = () => "./rmkModule.js";
const TabsPanel = () => "../../../components/tabsPanel/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const appData = getApp();
    const price = common_vendor.ref(0);
    const scheduleId = common_vendor.ref();
    common_vendor.ref([{
      text: "删除"
    }]);
    const infoDetail = common_vendor.ref({
      scheduleId: 0,
      createUser: 0,
      scheduleName: "",
      lineId: 0,
      departTime: "",
      arriveTime: "",
      duration: "",
      plateNumber: "",
      vehicleType: "",
      price: 0,
      seatTotal: 0,
      seatRemaining: 0,
      status: 0,
      isRecommend: 0,
      sort: 0,
      createTime: "",
      updateTime: "",
      remark: "",
      startCity: "",
      endCity: "",
      stationList: [],
      departDateData: {
        date: "",
        week: ""
      },
      departHourMinute: ""
    });
    const formData = common_vendor.reactive({
      scheduleId: 0,
      // 班次id
      ticketCount: 0,
      // 购票数量
      boardPointId: 0,
      // 用户选择 / 填写的上车点id
      contactPhone: "18649570396",
      // 联系方式
      remark: "",
      // 留言
      passengerIdList: []
      // 乘客id列表
      // startCity: '',
      // endCity: '',
    });
    const passengerList = common_vendor.ref([]);
    const passengerSelect = common_vendor.ref([]);
    const addressShow = common_vendor.ref(false);
    const columnsAddress = common_vendor.ref([]);
    const selectAddress = common_vendor.ref("");
    const paxModuleRef = common_vendor.ref();
    const rmkModuleRef = common_vendor.ref();
    const tabsPanelRef = common_vendor.ref();
    common_vendor.onLoad((options2) => {
      scheduleId.value = options2.id;
      formData.scheduleId = options2.id;
      common_vendor.index.__f__("log", "at pages/order/index/index.vue:227", "跳转传参id", scheduleId.value);
      requestTicketDetail();
    });
    common_vendor.onShow(() => {
      requestPassenger();
    });
    common_vendor.watch(() => passengerSelect.value.length, (newValue, oldValue) => {
      price.value = newValue * infoDetail.value.price;
    }, { immediate: true });
    const requestPassenger = async () => {
      const { data, code, msg } = await api_core_passenger.getPassengerList();
      passengerList.value = data;
    };
    const requestTicketDetail = async () => {
      const { message, data, code } = await api_core_ticket.getTicketDetail({
        scheduleId: scheduleId.value
      });
      const date = utils_date.getDepartTime(data.departTime);
      infoDetail.value = data;
      infoDetail.value.departDateData = date.dateData;
      infoDetail.value.departHourMinute = date.hourMinute;
      columnsAddress.value = data.stationList;
      common_vendor.index.__f__("log", "at pages/order/index/index.vue:250", columnsAddress.value, "========312");
    };
    const handlePassengerSelect = (item) => {
      const index = passengerSelect.value.findIndex((i) => i.passengerId === item.passengerId);
      if (index !== -1) {
        passengerSelect.value.splice(index, 1);
        return;
      }
      if (passengerSelect.value.length + 1 > infoDetail.value.seatRemaining) {
        common_vendor.index.showToast({
          title: "该班次已无剩余座位",
          icon: "none"
        });
        return;
      }
      if (passengerSelect.value.length + 1 >= 6) {
        common_vendor.index.showToast({
          title: "最多选择6位乘客",
          icon: "none"
        });
        return;
      }
      passengerSelect.value.push(item);
    };
    const handlePaxSelect = (data) => {
      const selectedList = passengerList.value.filter((item) => data.includes(item.passengerId));
      passengerSelect.value = selectedList;
    };
    const handleRmkChange = (e) => {
      formData.remark = e;
    };
    const isSelected = (id) => {
      return passengerSelect.value.some((item) => item.passengerId === id);
    };
    const handlePassenger = () => {
      var obj = passengerSelect.value.map((item) => item.passengerId);
      paxModuleRef.value.handleOpen(obj);
    };
    const handlePassengerDelete = (row) => {
      passengerSelect.value = passengerSelect.value.filter((item) => item.passengerId !== row);
    };
    const handleAddress = () => {
      addressShow.value = true;
    };
    const handleSelectAddress = (e) => {
      selectAddress.value = e.value[0].stationName;
      formData.boardPointId = e.value[0].stationId;
      addressShow.value = false;
    };
    const handleSubmit = async () => {
      if (passengerSelect.value.length === 0) {
        common_vendor.index.showToast({
          title: "请选择旅客",
          icon: "none"
        });
        return;
      }
      if (formData.contactPhone.length !== 11) {
        common_vendor.index.showToast({
          title: "请输入正确的手机号",
          icon: "none"
        });
        return;
      }
      if (!formData.boardPointId) {
        common_vendor.index.showToast({
          title: "请选择乘车地点",
          icon: "none"
        });
        return;
      }
      var passengerObj = [];
      passengerSelect.value.map((item) => {
        passengerObj.push(item.passengerId);
      });
      formData.ticketCount = passengerSelect.value.length;
      formData.passengerIdList = passengerObj;
      try {
        common_vendor.index.showLoading({
          title: "提交中...",
          showCancel: false,
          mask: true
        });
        const { data, code, msg } = await api_core_order.postOrdeSubmit(formData);
        appData.globalData.needRefreshTicketList = true;
        if (code == 200) {
          handlePushPayment(data);
        } else {
          common_vendor.index.showToast({
            title: msg,
            icon: "error"
          });
        }
      } catch (err) {
        if (err.code == 500) {
          common_vendor.index.showModal({
            title: "提示",
            content: err.msg,
            confirmText: "查看订单",
            cancelText: "取消订单",
            success: async function(res) {
              if (res.confirm) {
                handlePushPayment(err.data);
              } else if (res.cancel) {
                const { code, msg, data } = await api_core_order.postOrderCancel(err.data);
                if (code == 200) {
                  common_vendor.index.showToast({
                    title: msg,
                    icon: "success"
                  });
                } else {
                  common_vendor.index.showToast({
                    title: msg,
                    icon: "error"
                  });
                }
              }
            }
          });
        }
      } finally {
        common_vendor.index.hideLoading();
      }
    };
    const handlePushPayment = (codeNo) => {
      common_vendor.index.navigateTo({
        url: `/pages/order/payment/index?orderNo=${codeNo}`
      });
    };
    const handleRemake = () => {
      rmkModuleRef.value.handleOpen();
    };
    const handleTabsPanel = () => {
      tabsPanelRef.value.handleOpen();
    };
    return (_ctx, _cache) => {
      var _a, _b;
      return common_vendor.e({
        a: common_vendor.p({
          bgColor: "#fff",
          leftIconColor: "#fff",
          title: "填写订单",
          autoBack: true,
          fixed: true,
          placeholder: true
        }),
        b: common_vendor.t(infoDetail.value.departDateData.date),
        c: common_vendor.t(infoDetail.value.departDateData.week),
        d: common_vendor.t(infoDetail.value.departHourMinute),
        e: common_vendor.t((_a = infoDetail.value.stationList[0]) == null ? void 0 : _a.stationName),
        f: common_vendor.t((_b = infoDetail.value.stationList[infoDetail.value.stationList.length - 1]) == null ? void 0 : _b.stationName),
        g: common_vendor.p({
          name: "volume",
          color: "#999",
          size: "28"
        }),
        h: common_vendor.unref(common_assets.topUnrulesImg),
        i: common_vendor.unref(common_assets.duiIcon),
        j: common_vendor.unref(common_assets.duiIcon),
        k: common_vendor.p({
          name: "arrow-right",
          color: "#2979ff",
          size: "16"
        }),
        l: common_vendor.o(handleTabsPanel),
        m: common_vendor.unref(common_assets.walletIcon),
        n: common_vendor.t(infoDetail.value.price),
        o: common_vendor.p({
          name: "plus-circle-fill"
        }),
        p: common_vendor.o(handlePassenger),
        q: common_vendor.f(passengerList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: isSelected(item.passengerId) ? 1 : "",
            c: item.passengerId,
            d: common_vendor.o(($event) => handlePassengerSelect(item), item.passengerId)
          };
        }),
        r: common_vendor.f(passengerSelect.value, (item, k0, i0) => {
          return {
            a: "681799d5-4-" + i0,
            b: common_vendor.o(($event) => handlePassengerDelete(item.passengerId), item.passengerId),
            c: common_vendor.t(item.name),
            d: common_vendor.t(item.phone),
            e: item.passengerId
          };
        }),
        s: common_vendor.p({
          name: "minus-circle-fill"
        }),
        t: common_vendor.unref(common_assets.phoneIcon),
        v: common_vendor.o(($event) => formData.contactPhone = $event),
        w: common_vendor.p({
          placeholder: "请输入联系手机",
          type: "number",
          min: 11,
          max: 11,
          border: "0",
          clearable: true,
          modelValue: formData.contactPhone
        }),
        x: common_vendor.unref(common_assets.addressImg),
        y: selectAddress.value
      }, selectAddress.value ? {
        z: common_vendor.t(selectAddress.value)
      } : {}, {
        A: common_vendor.p({
          name: "arrow-right"
        }),
        B: common_vendor.o(handleAddress),
        C: common_vendor.unref(common_assets.remarkIcon),
        D: formData.remark
      }, formData.remark ? {
        E: common_vendor.t(formData.remark)
      } : {}, {
        F: common_vendor.o(handleRemake),
        G: common_vendor.p({
          name: "arrow-right"
        }),
        H: common_vendor.t(price.value),
        I: common_vendor.o(handleSubmit),
        J: common_vendor.sr(paxModuleRef, "681799d5-8", {
          "k": "paxModuleRef"
        }),
        K: common_vendor.o(handlePaxSelect),
        L: common_vendor.p({
          data: passengerList.value
        }),
        M: common_vendor.sr(rmkModuleRef, "681799d5-9", {
          "k": "rmkModuleRef"
        }),
        N: common_vendor.o(handleRmkChange),
        O: common_vendor.sr(tabsPanelRef, "681799d5-10", {
          "k": "tabsPanelRef"
        }),
        P: common_vendor.p({
          data: infoDetail.value,
          stationList: columnsAddress.value
        }),
        Q: common_vendor.o(($event) => addressShow.value = false),
        R: common_vendor.o(handleSelectAddress),
        S: common_vendor.p({
          show: addressShow.value,
          columns: [columnsAddress.value],
          keyName: "stationName"
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-681799d5"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/order/index/index.js.map
