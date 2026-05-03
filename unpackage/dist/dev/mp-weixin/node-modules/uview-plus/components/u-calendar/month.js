"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-calendar-month",
  mixins: [common_vendor.mpMixin, common_vendor.mixin],
  props: {
    // 是否显示月份背景色
    showMark: {
      type: Boolean,
      default: true
    },
    // 主题色，对底部按钮和选中日期有效
    color: {
      type: String,
      default: "#3c9cff"
    },
    // 月份数据
    months: {
      type: Array,
      default: () => []
    },
    // 日期选择类型
    mode: {
      type: String,
      default: "single"
    },
    // 日期行高
    rowHeight: {
      type: [String, Number],
      default: 58
    },
    // mode=multiple时，最多可选多少个日期
    maxCount: {
      type: [String, Number],
      default: Infinity
    },
    // mode=range时，第一个日期底部的提示文字
    startText: {
      type: String,
      default: "开始"
    },
    // mode=range时，最后一个日期底部的提示文字
    endText: {
      type: String,
      default: "结束"
    },
    // 默认选中的日期，mode为multiple或range是必须为数组格式
    defaultDate: {
      type: [Array, String, Date],
      default: null
    },
    // 最小的可选日期
    minDate: {
      type: [String, Number],
      default: 0
    },
    // 最大可选日期
    maxDate: {
      type: [String, Number],
      default: 0
    },
    // 如果没有设置maxDate，则往后推多少个月
    maxMonth: {
      type: [String, Number],
      default: 2
    },
    // 是否为只读状态，只读状态下禁止选择日期
    readonly: {
      type: Boolean,
      default: () => common_vendor.props$7.calendar.readonly
    },
    // 日期区间最多可选天数，默认无限制，mode = range时有效
    maxRange: {
      type: [Number, String],
      default: Infinity
    },
    // 范围选择超过最多可选天数时的提示文案，mode = range时有效
    rangePrompt: {
      type: String,
      default: ""
    },
    // 范围选择超过最多可选天数时，是否展示提示文案，mode = range时有效
    showRangePrompt: {
      type: Boolean,
      default: true
    },
    // 是否允许日期范围的起止时间为同一天，mode = range时有效
    allowSameDay: {
      type: Boolean,
      default: false
    },
    forbidDays: {
      type: Array,
      default: () => []
    },
    forbidDaysToast: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      // 每个日期的宽度
      width: 0,
      // 当前选中的日期item
      item: {},
      selected: []
    };
  },
  watch: {
    selectedChange: {
      immediate: true,
      handler(n) {
        this.setDefaultDate();
      }
    }
  },
  computed: {
    // 多个条件的变化，会引起选中日期的变化，这里统一管理监听
    selectedChange() {
      return [this.minDate, this.maxDate, this.defaultDate];
    },
    dayStyle(index1, index2, item) {
      return (index12, index22, item2) => {
        const style = {};
        let week = item2.week;
        const dayWidth = Number(parseFloat(this.width / 7).toFixed(3).slice(0, -1));
        style.height = common_vendor.addUnit(this.rowHeight, "px");
        if (index22 === 0) {
          week = (week === 0 ? 7 : week) - 1;
          style.marginLeft = common_vendor.addUnit(week * dayWidth, "px");
        }
        if (this.mode === "range") {
          style.paddingLeft = 0;
          style.paddingRight = 0;
          style.paddingBottom = 0;
          style.paddingTop = 0;
        }
        return style;
      };
    },
    daySelectStyle() {
      return (index1, index2, item) => {
        let date = common_vendor.e$1(item.date).format("YYYY-MM-DD"), style = {};
        if (this.selected.some((item2) => this.dateSame(item2, date))) {
          style.backgroundColor = this.color;
        }
        if (this.mode === "single") {
          if (date === this.selected[0]) {
            style.borderTopLeftRadius = "3px";
            style.borderBottomLeftRadius = "3px";
            style.borderTopRightRadius = "3px";
            style.borderBottomRightRadius = "3px";
          }
        } else if (this.mode === "range") {
          if (this.selected.length >= 2) {
            const len = this.selected.length - 1;
            if (this.dateSame(date, this.selected[0])) {
              style.borderTopLeftRadius = "3px";
              style.borderBottomLeftRadius = "3px";
            }
            if (this.dateSame(date, this.selected[len])) {
              style.borderTopRightRadius = "3px";
              style.borderBottomRightRadius = "3px";
            }
            if (common_vendor.e$1(date).isAfter(common_vendor.e$1(this.selected[0])) && common_vendor.e$1(date).isBefore(common_vendor.e$1(this.selected[len]))) {
              style.backgroundColor = common_vendor.colorGradient(this.color, "#ffffff", 100)[90];
              style.opacity = 0.7;
            }
          } else if (this.selected.length === 1) {
            style.borderTopLeftRadius = "3px";
            style.borderBottomLeftRadius = "3px";
          }
        } else {
          if (this.selected.some((item2) => this.dateSame(item2, date))) {
            style.borderTopLeftRadius = "3px";
            style.borderBottomLeftRadius = "3px";
            style.borderTopRightRadius = "3px";
            style.borderBottomRightRadius = "3px";
          }
        }
        return style;
      };
    },
    // 某个日期是否被选中
    textStyle() {
      return (item) => {
        const date = common_vendor.e$1(item.date).format("YYYY-MM-DD"), style = {};
        if (this.selected.some((item2) => this.dateSame(item2, date))) {
          style.color = "#ffffff";
        }
        if (this.mode === "range") {
          const len = this.selected.length - 1;
          if (common_vendor.e$1(date).isAfter(common_vendor.e$1(this.selected[0])) && common_vendor.e$1(date).isBefore(common_vendor.e$1(this.selected[len]))) {
            style.color = this.color;
          }
        }
        return style;
      };
    },
    // 获取底部的提示文字
    getBottomInfo() {
      return (index1, index2, item) => {
        const date = common_vendor.e$1(item.date).format("YYYY-MM-DD");
        const bottomInfo = item.bottomInfo;
        if (this.mode === "range" && this.selected.length > 0) {
          if (this.selected.length === 1) {
            if (this.dateSame(date, this.selected[0]))
              return this.startText;
            else
              return bottomInfo;
          } else {
            const len = this.selected.length - 1;
            if (this.dateSame(date, this.selected[0]) && this.dateSame(date, this.selected[1]) && len === 1) {
              return `${this.startText}/${this.endText}`;
            } else if (this.dateSame(date, this.selected[0])) {
              return this.startText;
            } else if (this.dateSame(date, this.selected[len])) {
              return this.endText;
            } else {
              return bottomInfo;
            }
          }
        } else {
          return bottomInfo;
        }
      };
    }
  },
  mounted() {
    this.init();
  },
  emits: ["monthSelected", "updateMonthTop"],
  methods: {
    init() {
      this.$emit("monthSelected", this.selected);
      this.$nextTick(() => {
        common_vendor.sleep(10).then(() => {
          this.getWrapperWidth();
          this.getMonthRect();
        });
      });
    },
    monthTitle(item) {
      if (common_vendor.index.getLocale() == "zh-Hans" || common_vendor.index.getLocale() == "zh-Hant") {
        return item.year + "年" + (item.month < 10 ? "0" + item.month : item.month) + "月";
      } else {
        return (item.month < 10 ? "0" + item.month : item.month) + "/" + item.year;
      }
    },
    isForbid(item) {
      let date = common_vendor.e$1(item.date).format("YYYY-MM-DD");
      if (this.mode !== "range" && this.forbidDays.includes(date)) {
        return true;
      }
      return false;
    },
    // 判断两个日期是否相等
    dateSame(date1, date2) {
      return common_vendor.e$1(date1).isSame(common_vendor.e$1(date2));
    },
    // 获取月份数据区域的宽度，因为nvue不支持百分比，所以无法通过css设置每个日期item的宽度
    getWrapperWidth() {
      this.$uGetRect(".u-calendar-month-wrapper").then((size) => {
        this.width = size.width;
      });
    },
    getMonthRect() {
      const promiseAllArr = this.months.map((item, index) => this.getMonthRectByPromise(
        `u-calendar-month-${index}`
      ));
      Promise.all(promiseAllArr).then(
        (sizes) => {
          let height = 1;
          const topArr = [];
          for (let i = 0; i < this.months.length; i++) {
            topArr[i] = height;
            height += sizes[i].height;
          }
          this.$emit("updateMonthTop", topArr);
        }
      );
    },
    // 获取每个月份区域的尺寸
    getMonthRectByPromise(el) {
      return new Promise((resolve) => {
        this.$uGetRect(`.${el}`).then((size) => {
          resolve(size);
        });
      });
    },
    // 点击某一个日期
    clickHandler(index1, index2, item) {
      if (this.readonly) {
        return;
      }
      this.item = item;
      const date = common_vendor.e$1(item.date).format("YYYY-MM-DD");
      if (item.disabled)
        return;
      if (this.isForbid(item)) {
        common_vendor.index.showToast({
          title: this.forbidDaysToast
        });
        return;
      }
      let selected = common_vendor.deepClone(this.selected);
      if (this.mode === "single") {
        selected = [date];
      } else if (this.mode === "multiple") {
        if (selected.some((item2) => this.dateSame(item2, date))) {
          const itemIndex = selected.findIndex((item2) => item2 === date);
          selected.splice(itemIndex, 1);
        } else {
          if (selected.length < this.maxCount)
            selected.push(date);
        }
      } else {
        if (selected.length === 0 || selected.length >= 2) {
          selected = [date];
        } else if (selected.length === 1) {
          const existsDate = selected[0];
          if (common_vendor.e$1(date).isBefore(existsDate)) {
            selected = [date];
          } else if (common_vendor.e$1(date).isAfter(existsDate)) {
            if (common_vendor.e$1(common_vendor.e$1(date).subtract(this.maxRange, "day")).isAfter(common_vendor.e$1(selected[0])) && this.showRangePrompt) {
              if (this.rangePrompt) {
                common_vendor.toast(this.rangePrompt);
              } else {
                common_vendor.toast(common_vendor.t$1("up.calendar.daysExceed", { days: this.maxRange }));
              }
              return;
            }
            selected.push(date);
            const startDate = selected[0];
            const endDate = selected[1];
            const arr = [];
            let i = 0;
            do {
              arr.push(common_vendor.e$1(startDate).add(i, "day").format("YYYY-MM-DD"));
              i++;
            } while (common_vendor.e$1(startDate).add(i, "day").isBefore(common_vendor.e$1(endDate)));
            arr.push(endDate);
            selected = arr;
          } else {
            if (selected[0] === date && !this.allowSameDay)
              return;
            selected.push(date);
          }
        }
      }
      this.setSelected(selected);
    },
    // 设置默认日期
    setDefaultDate() {
      if (!this.defaultDate) {
        const selected = [common_vendor.e$1().format("YYYY-MM-DD")];
        return this.setSelected(selected, false);
      }
      let defaultDate = [];
      const minDate = this.minDate || common_vendor.e$1().format("YYYY-MM-DD");
      const maxDate = this.maxDate || common_vendor.e$1(minDate).add(this.maxMonth - 1, "month").format("YYYY-MM-DD");
      if (this.mode === "single") {
        if (!common_vendor.test.array(this.defaultDate)) {
          defaultDate = [common_vendor.e$1(this.defaultDate).format("YYYY-MM-DD")];
        } else {
          defaultDate = [this.defaultDate[0]];
        }
      } else {
        if (!common_vendor.test.array(this.defaultDate))
          return;
        defaultDate = this.defaultDate;
      }
      defaultDate = defaultDate.filter((item) => {
        return common_vendor.e$1(item).isAfter(common_vendor.e$1(minDate).subtract(1, "day")) && common_vendor.e$1(item).isBefore(common_vendor.e$1(
          maxDate
        ).add(1, "day"));
      });
      this.setSelected(defaultDate, false);
    },
    setSelected(selected, event = true) {
      this.selected = selected;
      event && this.$emit("monthSelected", this.selected, "tap");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.months, (item, index, i0) => {
      return common_vendor.e({
        a: index !== 0
      }, index !== 0 ? {
        b: common_vendor.t($options.monthTitle(item))
      } : {}, $props.showMark ? {
        c: common_vendor.t(item.month)
      } : {}, {
        d: common_vendor.f(item.date, (item1, index1, i1) => {
          return common_vendor.e({
            a: common_vendor.t(item1.day),
            b: common_vendor.n(item1.disabled || $options.isForbid(item1) ? "u-calendar-month__days__day__select__info--disabled" : ""),
            c: common_vendor.s($options.textStyle(item1)),
            d: $options.getBottomInfo(index, index1, item1)
          }, $options.getBottomInfo(index, index1, item1) ? {
            e: common_vendor.t($options.getBottomInfo(index, index1, item1)),
            f: common_vendor.n(item1.disabled || $options.isForbid(item1) ? "u-calendar-month__days__day__select__buttom-info--disabled" : ""),
            g: common_vendor.s($options.textStyle(item1))
          } : {}, {
            h: item1.dot
          }, item1.dot ? {} : {}, {
            i: common_vendor.s($options.daySelectStyle(index, index1, item1)),
            j: index1,
            k: common_vendor.s($options.dayStyle(index, index1, item1)),
            l: common_vendor.o(($event) => $options.clickHandler(index, index1, item1), index1),
            m: common_vendor.n(item1.selected && "u-calendar-month__days__day__select--selected")
          });
        }),
        e: index,
        f: common_vendor.n(`u-calendar-month-${index}`),
        g: `u-calendar-month-${index}`,
        h: `month-${index}`
      });
    }),
    b: $props.showMark
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9b76ab7e"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/node-modules/uview-plus/components/u-calendar/month.js.map
