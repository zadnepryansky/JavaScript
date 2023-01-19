const myArray = [1, 2, 3]
console.log(myArray) // [ 1, 2, 3 ]

const newArray = myArray.map(el => el * 3) // similar as forEach, but map is CREATING NEW ARRAY

console.log(newArray) // [ 3, 6, 9 ] // newArray after MAP method
console.log(myArray)  // [ 1, 2, 3 ] // origin array
