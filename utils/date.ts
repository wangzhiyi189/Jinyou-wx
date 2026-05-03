/**
 * 格式化发车时间，拆分出 DateData 对象 + 时分
 * @param timeStr 后端原始时间：2026-04-19 12:00
 */
export interface DateData {
	/** 日期 例：4月19日 */
	date: string
	/** 星期 例：周日 */
	week: string
}
export function getDepartTime(timeStr: string) {
  const date = new Date(timeStr.replace(/-/g, '/'))
  const month = date.getMonth() + 1
  const day = date.getDate()
  // 星期数组
  const weekArr = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  const week = weekArr[date.getDay()]
  // 时分补零
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')

  return {
    // 对应 DateData 接口
    dateData: {
      date: `${month}月${day}日`,
      week: week
    } as DateData,
    // 时分字符串
    hourMinute: `${hours}:${minutes}`
  }
}

export function getDays(num:number):DateData[] {
	const week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
	const today = new Date()
	return Array.from({ length: num }, (_, i) => {
	  const d = new Date(today.getTime() + i * 86400000)
	  const m = String(d.getMonth() + 1).padStart(2, '0')
	  const day = String(d.getDate()).padStart(2, '0')
	  return {
	    date: `${m}-${day}`,
	    week: i === 0 ? '今天' : week[d.getDay()]
	  }
	})
}

/**
 * 计算当前时间与指定时间的分钟差
 * @param {string} targetTime - 指定时间，格式如：2025-01-01 12:00:00
 * @returns {number} 分钟数（正数=当前时间更晚，负数=更早）
 */
export function getMinuteDiff(targetTime : string) {
  // 当前时间戳
  const now = new Date().getTime();
  // 指定时间戳
  const target = new Date(targetTime).getTime();
  
  return Math.floor((target - now) / (1000 * 60));
  // 时间差（毫秒）转 分钟
  const diffMs = now - target;
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  return diffMinutes;
}

export function getTimeInterval(timeStr1: string, timeStr2: string) {
  // 1. 把时间字符串转为 Date 对象（兼容所有浏览器）
  const parseDate = (str:string) => {
    const [datePart, timePart] = str.split(' ');
    const [year, month, day] = datePart?.split('-').map(Number);
    const [hour, minute] = timePart?.split(':').map(Number);
    // JS 月份从 0 开始，所以 month - 1
    return new Date(year, month - 1, day, hour, minute, 0);
  };

  const date1 = parseDate(timeStr1);
  const date2 = parseDate(timeStr2);

  // 2. 计算时间差（毫秒），取绝对值保证结果为正
  const diffMs = Math.abs(date2.getTime() - date1.getTime());

  // 3. 换算成各种单位
  const diffSeconds = Math.floor(diffMs / 1000); // 总秒数
  const diffMinutes = Math.floor(diffMs / (1000 * 60)); // 总分钟数
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60)); // 总小时数
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)); // 总天数

  // 4. 格式化：天 时 分 秒
  const day = diffDays;
  const hour = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minute = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const second = Math.floor((diffMs % (1000 * 60)) / 1000);

  return {
    diffMs,          // 总毫秒数
    diffSeconds,     // 总秒数
    diffMinutes,     // 总分钟数
    diffHours,       // 总小时数
    diffDays,        // 总天数
    format: `${day}天${hour}小时${minute}分钟${second}秒`, // 友好格式
    simpleFormat: `${hour}.${minute}` // 简化格式（不足1天用这个）
  };
}

/**
 * 判断发车时间是否已过
 * @param {String|Date} departTime 发车时间 例："2025-03-30 12:00:00"
 * @return {Boolean} true=已过期，false=未过期
 */
export function isDepartTimePassed(departTime : any) {
  const depart = new Date(departTime)
  const now = new Date()
  // 发车时间 < 当前时间 = 已过期
  return depart.getTime() < now.getTime()
}
