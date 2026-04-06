if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$2 = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const clickBanner = (e) => {
        uni.navigateTo({ url: "/pages/animation/animation" });
      };
      const __returned__ = { clickBanner };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { onClick: $setup.clickBanner }, "你好")
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "D:/code/时分区区通/pages/index/index.vue"]]);
  const _sfc_main$1 = {
    __name: "animation",
    setup(__props, { expose: __expose }) {
      __expose();
      const bannerList = vue.ref([
        {
          bgColor: "#1989fa",
          title: "夏日特惠",
          desc: "全场商品满199减50"
        },
        {
          bgColor: "#4cd964",
          title: "新品上市",
          desc: "新款手机限时8折"
        },
        {
          bgColor: "#f7ba2a",
          title: "会员专享",
          desc: "每月1号免运费"
        }
      ]);
      const currentIndex = vue.ref(0);
      const handleSwiperChange = (e) => {
        currentIndex.value = e.detail.current;
      };
      const handleBtnClick = () => {
        uni.showToast({ title: "点击成功", type: "success" });
      };
      const __returned__ = { bannerList, currentIndex, handleSwiperChange, handleBtnClick, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "carousel-demo" }, [
      vue.createElementVNode(
        "swiper",
        {
          class: "swiper-container",
          autoplay: false,
          duration: 500,
          circular: true,
          "indicator-dots": true,
          "indicator-active-color": "#42b983",
          onChange: $setup.handleSwiperChange
        },
        [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($setup.bannerList, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("swiper-item", { key: index }, [
                vue.createElementVNode("view", {
                  class: "slide-bg",
                  style: { backgroundColor: "#333" }
                }),
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["slide-content", { "content-fade": $setup.currentIndex === index }])
                  },
                  [
                    vue.createElementVNode(
                      "text",
                      { class: "title" },
                      vue.toDisplayString(item.title),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "text",
                      { class: "desc" },
                      vue.toDisplayString(item.desc),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("button", {
                      class: "btn",
                      onClick: $setup.handleBtnClick
                    }, "立即参与")
                  ],
                  2
                  /* CLASS */
                )
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        32
        /* NEED_HYDRATION */
      )
    ]);
  }
  const PagesAnimationAnimation = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-1fa3f802"], ["__file", "D:/code/时分区区通/pages/animation/animation.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/animation/animation", PagesAnimationAnimation);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/code/时分区区通/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
