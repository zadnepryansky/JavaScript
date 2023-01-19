const myArray = [1, 2, 3]
console.log(myArray)  // [ 1, 2, 3 ]


// all emements array call callBack function (=>) 
myArray.forEach(el => console.log(el * 2))  // this is a function =>
//origin: [ 1, 2, 3 ]

//forEach:
//     1 * 2 -> 2
//     2 * 2 -> 4
//     3 * 2 -> 6

// output 2 4 6 
console.log(myArray)  // [ 1, 2, 3 ]  myArray not changed