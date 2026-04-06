"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-index-item",
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$4],
  data() {
    return {
      // 本组件到滚动条顶部的距离
      top: 0,
      height: 0,
      id: ""
    };
  },
  created() {
    this.anchor = {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.getParentData("u-index-list");
      if (!this.parent) {
        return common_vendor.error("u-index-item必须要搭配u-index-list组件使用");
      }
      common_vendor.sleep().then(() => {
        this.getIndexItemRect().then((size) => {
          this.top = Math.ceil(size.top);
          this.height = Math.ceil(size.height);
        });
      });
    },
    getIndexItemRect() {
      return new Promise((resolve) => {
        this.$uGetRect(".u-index-item").then((size) => {
          resolve(size);
        });
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: `u-index-item-${$data.id}`,
    b: common_vendor.n(`u-index-item-${$data.id}`)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/node-modules/uview-plus/components/u-index-item/u-index-item.js.map
