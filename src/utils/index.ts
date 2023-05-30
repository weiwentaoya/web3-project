export function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number,
) {
  // 这里可以直接调用传进来的函数
  let timeoutId: number | null
  return () => {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        func.apply(this, arguments)
        timeoutId = null
      }, delay)
    }
  }
}
