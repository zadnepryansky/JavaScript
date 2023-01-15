const preson = {
    name: 'Dima',
    age: 30
}

const person2 = Object.assign({}, preson)   // example 1

person2.age = 26

console.log(preson.age) // 30
console.log(person2.age) // 26

