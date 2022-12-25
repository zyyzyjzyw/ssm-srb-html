let person = {
  username: 'zyy',
  age: 20,
}

// let someone = person
let someone = { ...person }
console.log(person)
console.log(someone)

someone.username = 'zyj'

console.log(person)
console.log(someone)
