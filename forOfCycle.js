const myString = 'Hey'

for (const letter of myString) {
    console.log(letter)
}
// H
// e
// y

// Own example:
const myString2 = 'Script'
for (const letter of myString2) {
    console.log(letter)
}
// S
// c
// r
// i
// p
// t

// own Array example:
const myArray = [1, 'hola', true]
for (const element of myArray) {
    console.log(element)
}
// 1
// hola
// true

// forEach Array best practice:
const myArray2 = [1, 'hola', true]
myArray2.forEach((element, index) => {
    console.log(element, index)
})
// 1 0
// hola 1
// true 2