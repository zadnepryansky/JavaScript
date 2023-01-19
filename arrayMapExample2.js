const myArray = [1, 2, 3]
console.log(myArray)

const newArray = myArray.map((el) => {   // [ undefined, undefined, undefined ]
return el * 3  // return must be 
})

console.log(newArray)
console.log(myArray)

const myArray2 = [10, 20, 30]
console.log(myArray2)

const newArray2 = myArray2.map(function (el) {   // [ undefined, undefined, undefined ]
return el * 3  // return must be 
})

console.log(newArray2)
console.log(myArray2)  