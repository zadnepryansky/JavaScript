const myArray = [1, true, 'hello', null]

for (const key in myArray) {
    console.log(myArray[key])
}
// 1
// true
// hello
// null

// Best practice forEach Array:
const myArray2 = [8, true, 'hello world', null]
myArray2.forEach((element) => {
    console.log(element)
})
// 1
// true
// hello
// null