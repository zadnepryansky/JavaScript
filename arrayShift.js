const myArray = [1, 2, 3]
console.log(myArray)

myArray.shift()  // delete first element
console.log(myArray)  // [ 2, 3 ]

const removedElement = myArray.shift()

console.log(removedElement)  // [ 2 ]
console.log(myArray) // [ 3 ]