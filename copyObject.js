const objectA = {
    title: 'something',
    value: true
}

const copyOfA = objectA

copyOfA.title = 'new title'

objectA.pawwsord = 123

const newCopyOfA = copyOfA

console.log(newCopyOfA)

newCopyOfA.pawwsord = 111

console.log(objectA)
console.log(copyOfA)
console.log(newCopyOfA)

