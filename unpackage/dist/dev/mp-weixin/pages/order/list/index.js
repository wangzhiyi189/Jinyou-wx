"use strict";
const common_vendor = require("../../../common/vendor.js");
const api_core_order = require("../../../api/core/order.js");
const utils_orderStatus = require("../../../utils/orderStatus.js");
const utils_my = require("../../../utils/my.js");
if (!Array) {
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  const _easycom_u_subsection2 = common_vendor.resolveComponent("u-subsection");
  const _easycom_u_empty2 = common_vendor.resolveComponent("u-empty");
  (_easycom_u_navbar2 + _easycom_u_subsection2 + _easycom_u_empty2)();
}
const _easycom_u_navbar = () => "../../../node-modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_u_subsection = () => "../../../node-modules/uview-plus/components/u-subsection/u-subsection.js";
const _easycom_u_empty = () => "../../../node-modules/uview-plus/components/u-empty/u-empty.js";
if (!Math) {
  (_easycom_u_navbar + _easycom_u_subsection + _easycom_u_empty + PullRefreshList)();
}
const PullRefreshList = () => "../../../components/pullRefresh/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const orderList = common_vendor.ref([]);
    const activeIndex = common_vendor.ref(0);
    const total = common_vendor.ref(0);
    const formData = common_vendor.reactive({
      pageNum: 1,
      pageSize: 10,
      status: 6
    });
    const refreshing = common_vendor.ref(false);
    const loading = common_vendor.ref(true);
    const noMore = common_vendor.ref(false);
    common_vendor.onLoad((option) => {
      common_vendor.index.__f__("log", "at pages/order/list/index.vue:78", option.value);
      formData.status = option.value;
      var index = utils_my.orderStatus.findIndex((item) => item.value == option.value);
      activeIndex.value = index;
      requestList();
    });
    const requestList = async () => {
      common_vendor.index.showLoading({
        title: "加载中...",
        mask: true
      });
      try {
        const { data } = await api_core_order.getOrderList({
          ...formData,
          status: formData.status == 6 ? "" : formData.status
        });
        if (formData.pageNum === 1) {
          orderList.value = [];
        }
        orderList.value.push(...data.items);
        total.value = data.total;
        noMore.value = orderList.value.length >= total.value;
      } finally {
        common_vendor.index.hideLoading();
        refreshing.value = false;
        loading.value = false;
      }
    };
    const handleSubsection = (index) => {
      common_vendor.index.__f__("log", "at pages/order/list/index.vue:113", index);
      activeIndex.value = index;
      formData.status = utils_my.orderStatus[index].value;
      formData.pageNum = 1;
      orderList.value = [];
      requestList();
    };
    const onRefresh = () => {
      refreshing.value = true;
      formData.pageNum = 1;
      noMore.value = false;
      orderList.value = [];
      requestList();
    };
    const onLoadMore = () => {
      if (noMore.value || refreshing.value)
        return;
      loading.value = true;
      formData.pageNum++;
      requestList();
    };
    const handlePay = (row) => {
      if (row.orderStatus != 0) {
        common_vendor.index.showToast({
          title: "状态已过期",
          icon: "none"
        });
        onRefresh();
        return;
      }
      common_vendor.index.navigateTo({
        url: `/pages/order/payment/index?orderNo=${row.orderNo}`
      });
    };
    const handleDelete = async (orderNo) => {
      common_vendor.index.showModal({
        title: "提示",
        content: "确定要删除吗？",
        success: async function(res) {
          if (res.confirm) {
            common_vendor.index.showLoading({
              title: "删除中...",
              mask: true
            });
            try {
              const { code, msg } = await api_core_order.deleteOrderDelete(orderNo);
              if (code != 200)
                return common_vendor.index.showToast({
                  title: msg,
                  icon: "error"
                });
              common_vendor.index.showToast({
                title: msg,
                icon: "success"
              });
              onRefresh();
            } finally {
              common_vendor.index.hideLoading();
            }
          }
        }
      });
    };
    const handleDetail = (orderNo) => {
      common_vendor.index.navigateTo({
        url: `/pages/order/detail/index?orderNo=${orderNo}`
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          bgColor: "#fff",
          leftIconColor: "#fff",
          title: "全部订单",
          autoBack: true,
          fixed: true,
          placeholder: true
        }),
        b: common_vendor.o(handleSubsection),
        c: common_vendor.p({
          list: common_vendor.unref(utils_my.orderStatus),
          current: activeIndex.value,
          keyName: "text"
        }),
        d: orderList.value.length > 0
      }, orderList.value.length > 0 ? {
        e: common_vendor.f(orderList.value, (item, k0, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.orderNo),
            b: common_vendor.t(common_vendor.unref(utils_orderStatus.getOrderStatusLabel)(item.orderStatus)),
            c: common_vendor.t(item.startStation),
            d: common_vendor.t(item.endStation),
            e: common_vendor.t(item.departureTime),
            f: common_vendor.t(item.totalAmount),
            g: common_vendor.o(($event) => handleDetail(item.orderNo), item.wxOrderId),
            h: common_vendor.o(($event) => handleDelete(item.orderNo), item.wxOrderId),
            i: item.orderStatus == 0
          }, item.orderStatus == 0 ? {
            j: common_vendor.o(($event) => handlePay(item), item.wxOrderId)
          } : {}, {
            k: item.wxOrderId
          });
        })
      } : {
        f: common_vendor.p({
          mode: "order",
          text: "还没有订单"
        })
      }, {
        g: common_vendor.o(onRefresh),
        h: common_vendor.o(onLoadMore),
        i: common_vendor.p({
          refreshing: refreshing.value,
          loading: loading.value,
          ["no-more"]: noMore.value
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8504eca3"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/order/list/index.js.map
