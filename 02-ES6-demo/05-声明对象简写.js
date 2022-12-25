let username = 'Tom'
let age = 2

let sing = function () {
  console.log('zyyyyy')
}
// 传统
let person = {
  username: username,
  age: age,
  sing: sing,
}
console.log(person.username)
console.log(person.age)
person.sing()
