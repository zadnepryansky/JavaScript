const myArray = [1, 2, 3 ,10]

const res = myArray.forEach(el => console.log(el * 3))
// 3
// 6
// 9
// 30

console.log(res)  // undefined

console.log(myArray) // [1, 2, 3]