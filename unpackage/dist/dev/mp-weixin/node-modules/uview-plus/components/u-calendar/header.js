"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-calendar-header",
  mixins: [common_vendor.mpMixin, common_vendor.mixin],
  props: {
    // 标题
    title: {
      type: String,
      default: ""
    },
    // 副标题
    subtitle: {
      type: String,
      default: ""
    },
    // 是否显示标题
    showTitle: {
      type: Boolean,
      default: true
    },
    // 是否显示副标题
    showSubtitle: {
      type: Boolean,
      default: true
    },
    // 星期文本
    weekText: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    name() {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.showTitle
  }, $props.showTitle ? {
    b: common_vendor.t($props.title)
  } : {}, {
    c: $props.showSubtitle
  }, $props.showSubtitle ? {
    d: common_vendor.t($props.subtitle)
  } : {}, {
    e: common_vendor.t($props.weekText[0]),
    f: common_vendor.t($props.weekText[1]),
    g: common_vendor.t($props.weekText[2]),
    h: common_vendor.t($props.weekText[3]),
    i: common_vendor.t($props.weekText[4]),
    j: common_vendor.t($props.weekText[5]),
    k: common_vendor.t($props.weekText[6])
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-31c8bd61"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/node-modules/uview-plus/components/u-calendar/header.js.map
