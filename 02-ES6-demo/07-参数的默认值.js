function add(a) {
  console.log('a是:', a) //a是: undefined
  return 100 + a //NaN
}

let result = add()
console.log(result)
