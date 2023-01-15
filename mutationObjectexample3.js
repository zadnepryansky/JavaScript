const person = {
    name: 'Dima',
    age: 30
}

const person2 = JSON.parse(JSON.stringify(person))

person2.name = 'Anna'
person2.age = 26

console.log(person2.name)  // Anna
console.log(person2.age)   // 26

console.log(person.name)   // Dima
console.log(person.age)    // 30