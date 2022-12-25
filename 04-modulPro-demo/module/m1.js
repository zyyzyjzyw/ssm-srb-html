/* export let star = 'zyy'

export function sing(title) {
  console.log(title)
} */

//第二种导出模块的方法
let star = 'zyy'
function sing(title) {
  console.log(title)
}
export { star, sing }
