"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-index-anchor",
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$9],
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    addUnit: common_vendor.addUnit,
    init() {
      const indexList = common_vendor.$parent.call(this, "u-index-list");
      if (!indexList) {
        return common_vendor.error("u-index-anchor必须要搭配u-index-list组件使用");
      }
      indexList.anchors.push(this);
      const indexListItem = common_vendor.$parent.call(this, "u-index-item");
      if (!indexListItem) {
        return common_vendor.error("u-index-anchor必须要搭配u-index-item组件使用");
      }
      if (typeof this.text == "string") {
        indexListItem.id = this.text.charCodeAt(0);
      } else {
        indexListItem.id = this.text.name.charCodeAt(0);
      }
    }
  },
  computed: {
    parentSticky() {
      const indexList = common_vendor.$parent.call(this, "u-index-list");
      return indexList ? indexList.sticky : true;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t(_ctx.text.name || _ctx.text),
    b: $options.addUnit(_ctx.size),
    c: _ctx.color,
    d: $options.parentSticky ? 1 : "",
    e: `u-index-anchor-${_ctx.text}`,
    f: $options.addUnit(_ctx.height),
    g: _ctx.bgColor
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e7d138dd"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/node-modules/uview-plus/components/u-index-anchor/u-index-anchor.js.map
