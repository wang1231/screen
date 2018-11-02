export function formatDate (date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + ''
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
        }
    }
    return fmt
}
function padLeftZero (str) {
    return ('00' + str).substr(str.length)
}

// 在月份、日期、小时 小于 10补0
export function padDate(value) {
  return `${value < 10 ? '0' + value : value}`
}
// 判断是否是闰年
export function isLeapYear(Year) {
  let isYear = null;
  if (((Year % 4) == 0) && ((Year % 100) != 0) || ((Year % 400) == 0)) {
    isYear = true
  } else {
    isYear = false
  }
    return isYear;
}
// 日期 30 31 29 28
export function someDay(year,mouth) {
  let moreDays = ['01','03','05','07','08','10','12'];
  let lessDays = ['04','06','09','11'];
  let CNArr = [];
  if (moreDays.indexOf(mouth) > -1){
    CNArr = cycleNumber(31);
  } else if (lessDays.indexOf(mouth) > -1){
    CNArr = cycleNumber(30);
  } else {
    if (isLeapYear(year)){
      CNArr = cycleNumber(29);
    } else {
      CNArr = cycleNumber(28);
    }
  }
  return CNArr
}
function cycleNumber(value) {
  let CN = [];
  for (let i = 0; i < value; i++){
    CN.push(padDate(i + 1));
  }
  return CN
}
// 数字动画
export function numberGrow (ele,value) {
  console.log(ele)
  let stepFloat = (value * 10) / (2 * 1000);
  let step = parseInt(stepFloat)
  let current = 0
  let start = 0
  let t = setInterval(function () {
    start += step
    if (start > value) {
      clearInterval(t)
      start = value
      t = null
    }
    if (current === start) {
      return
    }
    current = start
    ele.innerHTML = current.toString().replace(/(\d)(?=(?:\d{3}[+]?)+$)/g, '$1,')
  }, 10)
}
export default {
  formatDate,
  padDate,
  isLeapYear,
  someDay,
  numberGrow
}
