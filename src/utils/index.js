/**
 * 微信api转promise
 *
 * @param {*} fn
 * @param {*} [options={}]
 * @returns
 */
export const promisify = (fn, options = {}) => {
  return new Promise((res, rej) => {
    fn({
      ...options,
      success: res,
      fail: rej
    })
  })
}