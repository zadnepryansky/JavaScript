// fot in example:
const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}

for (const key in myObject) {
    console.log(key, myObject[key])
}
// x 10
// y true
// z abc


// forEach example:
const myObject2 = {
    x: 11,
    y: true,
    z: 'example 2'
}
Object.keys(myObject2).forEach(key => {
    console.log(key, myObject2[key])
})
// x 11
// y true
// z example 2


// forEach example values:
const myObject3 = {
    x: 12,
    y: true,
    z: 'example 3'
}
Object.values(myObject3).forEach(value => {
    console.log(value)
})
// 12
// true
// example 3