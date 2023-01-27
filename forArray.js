const myArray = ['first', 'second', 'third']
for (let i = 0; i < myArray.length; i++){
    console.log(myArray[i])
}
// first
// second
// third


// Best practice forEach Array:

const myArray2 = ['first', 'second', 'third']
myArray2.forEach((element, index) => {   // callback function (element, index) // index - optional
    console.log(element, index)
})
// first 0
// second 1
// third 2