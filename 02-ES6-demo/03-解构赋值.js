// 1 数组的解构
const F4 = ['1', '2', '3', '4']
console.log(F4)
/* let number1 = F4[0]
let number2 = F4[1] */

let [number1, number2, number3, number4] = F4
console.log(number1)
console.log(number2)
console.log(number3)
console.log(number4)

// 2 对象解构
const abs = {
  username: 'zyy',
  age: '不详',
  test: function () {
    console.log('test测试')
  },
}

/* let username = abs.username
let age = abs.age
let test = abs.test */
let { username, age, test } = abs

console.log(username)
console.log(age)
test()
