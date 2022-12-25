// 声明变量
//var a
//a = 1
//var a = true
//let定义的变量不可以重复赋值，但是var可以
//console.log(a)

//var star = 5
//var flag = true //行程是否结束

//if (flag) {
//块级作用域
// var star = 5
//}

//console.log(star)

//if (flag) {
//块级作用域
//  let starLet = 5
//}

//console.log(starLet)

//函数级别的作用域
/* function test1() {
  var f1 = '函数test1的变量'
  console.log(f1)
}
test1()
console.log(f1) */

// 3 变量提升
var username
console.log(username) //ReferenceError: username is not defined
