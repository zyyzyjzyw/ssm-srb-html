//异步编程解决方案:文件的读取、ajax等等

const fs = require('fs') //引入node.js中的文本文件拓展模块
//实例化Promise
// Promise对象有三个状态:初始化状态、成功、失败
//resolve:函数类型的参数，可以将promise的状态设置为成功
//reject:函数类型的参数，可以将promise的状态设置为失败
const p = new Promise((resolve, reject) => {
  //执行异步操作
  //第一个参数:堆取文件的路径
  //第二个参数:读取过程中对响应结果的处理
  fs.readFile('./01-let.js', (err, data) => {
    //当文件读取失败时的错误对象
    if (err) {
      console.log('文件读取失败')
      //return
      reject(err) //将Promise的状态改为失败
    }
    //当文件读取成功的文件内容
    //console.log(data.toString())
    resolve(data) //将Promise的状态改为成功
  })
})
//p.then 当promise的状态为成功，then被调用。
//p.catch 当promise的状态为失败,catch被调用。
p.then((response) => {
  console.log(response.toString()) //成功业务逻辑
}).catch((error) => {
  console.log(error.toString()) //失败业务逻辑
})
