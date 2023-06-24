export function throttle<T extends (...args: any[]) => any>(
  this: any,
  func: T,
  delay: number,
  ...args: Parameters<T>
) {
  // 这里可以直接调用传进来的函数
  let timeoutId: any
  return () => {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        // eslint-disable-next-line prefer-rest-params
        func.apply(self, args)
        timeoutId = null
      }, delay)
    }
  }
}
// 毫秒转换为天时分秒
export const formatSeconds = (value: number | undefined) => {
  if (!value) {
    return ' '
  }
  let theTime = parseInt(value.toString()) // 秒
  let theTime1 = 0 // 分
  let theTime2 = 0 // 小时
  let theTime3 = 0 // 天
  if (theTime > 60) {
    theTime1 = parseInt((theTime / 60).toString())
    theTime = parseInt((theTime % 60).toString())
    if (theTime1 > 60) {
      theTime2 = parseInt((theTime1 / 60).toString())
      theTime1 = parseInt((theTime1 % 60).toString())
      if (theTime2 > 24) {
        //大于24小时
        theTime3 = parseInt((theTime2 / 24).toString())
        theTime2 = parseInt((theTime2 % 24).toString())
      }
    }
  }
  let result = ''
  if (theTime > 0) {
    result = '' + parseInt(theTime.toString()) + 's'
  }
  if (theTime1 > 0) {
    result = '' + parseInt(theTime1.toString()) + 'm ' + result
  }
  if (theTime2 > 0) {
    result = '' + parseInt(theTime2.toString()) + 'h ' + result
  }
  if (theTime3 > 0) {
    result = '' + parseInt(theTime3.toString()) + 'd ' + result
  }
  return result
}
