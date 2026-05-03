"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_divider2 = common_vendor.resolveComponent("u-divider");
  _easycom_u_divider2();
}
const _easycom_u_divider = () => "../../node-modules/uview-plus/components/u-divider/u-divider.js";
if (!Math) {
  _easycom_u_divider();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  props: {
    refreshing: { type: Boolean },
    loading: { type: Boolean },
    noMore: { type: Boolean }
  },
  emits: ["refresh", "loadMore"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const onRefresh = () => {
      emit("refresh");
    };
    const onLoadMore = () => {
      if (props.refreshing || props.noMore)
        return;
      emit("loadMore");
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: _ctx.refreshing
      }, _ctx.refreshing ? {} : {}, {
        b: common_vendor.p({
          text: _ctx.noMore ? "没有更多了" : "加载中..."
        }),
        c: _ctx.refreshing,
        d: common_vendor.o(onRefresh),
        e: common_vendor.o(onLoadMore)
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d420e590"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/pullRefresh/index.js.map
