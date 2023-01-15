const preson = {
    name: 'Dima',
    age: 30
}

const person2 = {...preson}

person2.name = 'Anna'

console.log(preson.name)  // Dima
console.log(person2.name) // Anna