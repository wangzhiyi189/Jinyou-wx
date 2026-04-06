"use strict";
const common_vendor = require("../../../../common/vendor.js");
const indexList = () => {
  const indexList2 = [];
  const charCodeOfA = "A".charCodeAt(0);
  for (let i = 0; i < 26; i++) {
    indexList2.push(String.fromCharCode(charCodeOfA + i));
  }
  return indexList2;
};
const _sfc_main = {
  name: "u-index-list",
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$5],
  // 将自定义节点设置成虚拟的，更加接近Vue组件的表现，能更好的使用flex属性
  options: {
    virtualHost: true
  },
  data() {
    return {
      // 当前正在被选中的字母索引
      activeIndex: -1,
      touchmoveIndex: 1,
      // 索引字母的信息
      letterInfo: {
        height: 0,
        itemHeight: 0,
        top: 0
      },
      // 设置字母指示器的高度，后面为了让指示器跟随字母，并将尖角部分指向字母的中部，需要依赖此值
      indicatorHeight: 50,
      // 字母放大指示器的top值，为了让其指向当前激活的字母
      // indicatorTop: 0
      // 当前是否正在被触摸状态
      touching: false,
      // 滚动条顶部top值
      scrollTop: 0,
      // scroll-view的高度
      scrollViewHeight: 0,
      // 系统信息
      sys: {},
      scrolling: false,
      scrollIntoView: "",
      pageY: 0,
      topOffset: 0
    };
  },
  computed: {
    // 如果有传入外部的indexList锚点数组则使用，否则使用内部生成A-Z字母
    uIndexList() {
      return this.indexList.length ? this.indexList : indexList();
    },
    // 字母放大指示器的top值，为了让其指向当前激活的字母
    indicatorTop() {
      const {
        top,
        height,
        itemHeight
      } = this.letterInfo;
      return Math.floor(top - height / 2 + itemHeight * this.activeIndex + itemHeight - 70 / 2);
    }
  },
  watch: {
    // 监听字母索引的变化，重新设置尺寸
    uIndexList: {
      immediate: false,
      handler() {
        common_vendor.sleep(30).then(() => {
          this.setIndexListLetterInfo();
        });
      }
    }
  },
  created() {
    this.children = [];
    this.anchors = [];
    this.sys = common_vendor.getWindowInfo();
  },
  mounted() {
    this.init();
    common_vendor.sleep(50).then(() => {
      this.setIndexListLetterInfo();
    });
  },
  methods: {
    addUnit: common_vendor.addUnit,
    init() {
      let customNavHeight = common_vendor.getPx(this.customNavHeight);
      this.getIndexListRect().then(async (sizeScroll) => {
        this.scrollViewHeight = sizeScroll.height ? sizeScroll.height : this.sys.windowHeight - customNavHeight;
        this.topOffset = this.sys.windowHeight - this.scrollViewHeight;
      });
    },
    // 索引列表被触摸
    touchStart(e) {
      const touchStartData = e.changedTouches[0];
      if (!touchStartData)
        return;
      this.touching = true;
      const {
        pageY,
        screenY
      } = touchStartData;
      const currentIndex = this.getIndexListLetter(pageY);
      this.setValueForTouch(currentIndex);
    },
    // 索引字母列表被触摸滑动中
    touchMove(e) {
      let touchMove = e.changedTouches[0];
      if (!touchMove)
        return;
      if (!this.touching) {
        this.touching = true;
      }
      const {
        pageY,
        screenY
      } = touchMove;
      const currentIndex = this.getIndexListLetter(pageY);
      this.setValueForTouch(currentIndex);
    },
    // 触摸结束
    touchEnd(e) {
      common_vendor.sleep(300).then(() => {
        this.touching = false;
      });
    },
    // 获取索引列表的尺寸以及单个字符的尺寸信息
    getIndexListLetterRect() {
      return new Promise((resolve) => {
        this.$uGetRect(".u-index-list__letter").then((size) => {
          resolve(size);
        });
      });
    },
    getIndexListScrollViewRect() {
      return new Promise((resolve) => {
        this.$nextTick(() => {
          this.$uGetRect(".u-index-list__scroll-view").then((size) => {
            resolve(size);
          });
        });
      });
    },
    getIndexListRect() {
      return new Promise((resolve) => {
        this.$uGetRect(".u-index-list").then((size) => {
          resolve(size);
        });
      });
    },
    // 设置indexList索引的尺寸信息
    setIndexListLetterInfo() {
      this.getIndexListLetterRect().then((size) => {
        const {
          height
        } = size;
        const sysData = common_vendor.getWindowInfo();
        sysData.windowHeight;
        if (this.customNavHeight == 0) {
          -(sysData.statusBarHeight + 44);
        } else {
          common_vendor.getPx(this.customNavHeight);
        }
        this.getIndexListScrollViewRect().then((sizeScroll) => {
          this.letterInfo = {
            height,
            // 为了让字母列表对屏幕绝对居中，让其对导航栏进行修正，也即往上偏移导航栏的一半高度
            top: sizeScroll.height / 2,
            // top: (this.scrollViewHeight - height) / 2 + customNavHeight / 2,
            itemHeight: Math.floor(height / this.uIndexList.length)
          };
        });
      });
    },
    // 获取当前被触摸的索引字母
    getIndexListLetter(pageY) {
      this.pageY = pageY;
      let {
        top,
        height,
        itemHeight
      } = this.letterInfo;
      let index = this.currentIndex;
      top = top - height / 2;
      pageY = pageY - this.topOffset;
      if (pageY < top) {
        index = 0;
      } else if (pageY >= top + height) {
        index = this.uIndexList.length - 1;
      } else {
        index = Math.floor((pageY - top) / itemHeight);
      }
      return index;
    },
    // 设置各项由触摸而导致变化的值
    async setValueForTouch(currentIndex) {
      var _a;
      if (currentIndex === this.activeIndex)
        return;
      this.activeIndex = currentIndex;
      this.$emit("select", this.uIndexList[currentIndex]);
      const customNavHeight = this.customNavHeight;
      const header = await this.getHeaderRect();
      let top = header.height;
      this.anchors;
      let children = this.children.map((item, index) => {
        const childHeight = item.height + common_vendor.getPx(this.itemMargin);
        const child = {
          height: childHeight,
          top
        };
        top = top + childHeight;
        return child;
      });
      if (((_a = children[currentIndex]) == null ? void 0 : _a.top) || children[currentIndex].top === 0) {
        this.scrollTop = children[currentIndex].top - common_vendor.getPx(customNavHeight);
      }
    },
    getHeaderRect() {
      return new Promise((resolve) => {
        if (!this.$slots.header) {
          resolve({
            width: 0,
            height: 0
          });
        }
        this.$uGetRect(".u-index-list__header").then((size) => {
          resolve(size);
        });
      });
    },
    // scroll-view的滚动事件
    async scrollHandler(e) {
      if (this.touching || this.scrolling)
        return;
      this.scrolling = true;
      common_vendor.sleep(10).then(() => {
        this.scrolling = false;
      });
      let scrollTop = 0;
      const len = this.children.length;
      let children = this.children;
      const header = await this.getHeaderRect();
      let top = header.height;
      this.anchors;
      children = this.children.map((item, index) => {
        const childHeight = item.height + common_vendor.getPx(this.itemMargin);
        const child = {
          height: childHeight,
          top
        };
        top = top + childHeight;
        return child;
      });
      scrollTop = e.detail.scrollTop;
      scrollTop = scrollTop + common_vendor.getPx(this.customNavHeight);
      for (let i = 0; i < len; i++) {
        const item = children[i], nextItem = children[i + 1];
        if (scrollTop <= children[0].top || scrollTop >= children[len - 1].top + children[len - 1].height) {
          this.activeIndex = -1;
          break;
        } else if (!nextItem) {
          this.activeIndex = len - 1;
          break;
        } else if (scrollTop > item.top && scrollTop < nextItem.top) {
          this.activeIndex = i;
          break;
        }
      }
    }
  }
};
if (!Array) {
  const _easycom_u_transition2 = common_vendor.resolveComponent("u-transition");
  _easycom_u_transition2();
}
const _easycom_u_transition = () => "../u-transition/u-transition.js";
if (!Math) {
  _easycom_u_transition();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  return common_vendor.e({
    a: _ctx.$slots.header
  }, _ctx.$slots.header ? {} : {}, {
    b: _ctx.$slots.footer
  }, _ctx.$slots.footer ? {} : {}, {
    c: $data.scrollTop,
    d: $data.scrollIntoView,
    e: $options.addUnit($data.scrollViewHeight),
    f: common_vendor.o((...args) => $options.scrollHandler && $options.scrollHandler(...args)),
    g: common_vendor.f($options.uIndexList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.key || item),
        b: $data.activeIndex === index ? "#fff" : _ctx.inactiveColor,
        c: index,
        d: $data.activeIndex === index ? _ctx.activeColor : "transparent"
      };
    }),
    h: $options.addUnit($data.letterInfo.top),
    i: common_vendor.o((...args) => $options.touchStart && $options.touchStart(...args)),
    j: common_vendor.o((...args) => $options.touchMove && $options.touchMove(...args)),
    k: common_vendor.o((...args) => $options.touchEnd && $options.touchEnd(...args)),
    l: common_vendor.o((...args) => $options.touchEnd && $options.touchEnd(...args)),
    m: common_vendor.t(((_a = $options.uIndexList[$data.activeIndex]) == null ? void 0 : _a.key) || $options.uIndexList[$data.activeIndex]),
    n: $options.addUnit($data.indicatorHeight),
    o: $options.addUnit($data.indicatorHeight),
    p: common_vendor.p({
      mode: "fade",
      show: $data.touching,
      customStyle: {
        position: "absolute",
        right: "50px",
        top: $options.addUnit($options.indicatorTop, "px"),
        zIndex: 3
      }
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5e193795"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/node-modules/uview-plus/components/u-index-list/u-index-list.js.map
