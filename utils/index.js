/**
 * 格式化时间(秒->时分秒)
 * @param seconds 秒
 * @returns {string}
 */
export const formatSeconds = seconds => {
  // 秒
  let secondTime = parseInt(seconds)
  // 分
  let minuteTime = 0
  // 小时
  let hourTime = 0
  if (secondTime > 60) {
    // 如果秒数大于60，将秒数转换成整数
    // 获取分钟，除以60取整数，得到整数分钟
    minuteTime = parseInt(secondTime / 60)
    // 获取秒数，秒数取余，得到整数秒数
    secondTime = parseInt(secondTime % 60)
    // 如果分钟大于60，将分钟转换成小时
    if (minuteTime > 60) {
      // 获取小时，获取分钟除以60，得到整数小时
      hourTime = parseInt(minuteTime / 60)
      // 获取小时后取余的分，获取分钟除以60取余的分
      minuteTime = parseInt(minuteTime % 60)
    }
  }
  let result =
    secondTime < 10 ? '0' + parseInt(secondTime) : '' + parseInt(secondTime)
  minuteTime < 10
    ? (result = '0' + parseInt(minuteTime) + ':' + result)
    : (result = parseInt(minuteTime) + ':' + result)
  if (hourTime > 0) {
    hourTime < 10
      ? (result = '0' + parseInt(hourTime) + ':' + result)
      : (result = parseInt(hourTime) + ':' + result)
  }
  return result
}
