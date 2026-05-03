"use strict";
function getDepartTime(timeStr) {
  const date = new Date(timeStr.replace(/-/g, "/"));
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekArr = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  const week = weekArr[date.getDay()];
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return {
    // 对应 DateData 接口
    dateData: {
      date: `${month}月${day}日`,
      week
    },
    // 时分字符串
    hourMinute: `${hours}:${minutes}`
  };
}
function getDays(num) {
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
}
function getTimeInterval(timeStr1, timeStr2) {
  const parseDate = (str) => {
    const [datePart, timePart] = str.split(" ");
    const [year, month, day2] = datePart == null ? void 0 : datePart.split("-").map(Number);
    const [hour2, minute2] = timePart == null ? void 0 : timePart.split(":").map(Number);
    return new Date(year, month - 1, day2, hour2, minute2, 0);
  };
  const date1 = parseDate(timeStr1);
  const date2 = parseDate(timeStr2);
  const diffMs = Math.abs(date2.getTime() - date1.getTime());
  const diffSeconds = Math.floor(diffMs / 1e3);
  const diffMinutes = Math.floor(diffMs / (1e3 * 60));
  const diffHours = Math.floor(diffMs / (1e3 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1e3 * 60 * 60 * 24));
  const day = diffDays;
  const hour = Math.floor(diffMs % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
  const minute = Math.floor(diffMs % (1e3 * 60 * 60) / (1e3 * 60));
  const second = Math.floor(diffMs % (1e3 * 60) / 1e3);
  return {
    diffMs,
    // 总毫秒数
    diffSeconds,
    // 总秒数
    diffMinutes,
    // 总分钟数
    diffHours,
    // 总小时数
    diffDays,
    // 总天数
    format: `${day}天${hour}小时${minute}分钟${second}秒`,
    // 友好格式
    simpleFormat: `${hour}.${minute}`
    // 简化格式（不足1天用这个）
  };
}
function isDepartTimePassed(departTime) {
  const depart = new Date(departTime);
  const now = /* @__PURE__ */ new Date();
  return depart.getTime() < now.getTime();
}
exports.getDays = getDays;
exports.getDepartTime = getDepartTime;
exports.getTimeInterval = getTimeInterval;
exports.isDepartTimePassed = isDepartTimePassed;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/date.js.map
