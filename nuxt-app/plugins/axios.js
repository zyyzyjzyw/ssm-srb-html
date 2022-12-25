export default function({ $axios, redirect }) {
  /* 请求拦截器 */
  $axios.onRequest((config) => {
    console.log('执行请求拦截器 ' + config.url)
  })
  /* 响应拦截器 */
  $axios.onResponse((response) => {
    console.log('执行响应拦截器')
    return response
  })
  /* 错误拦截器 */
  $axios.onError((error) => {
    console.log('执行error拦截器' + error) // for debug
  })
}
