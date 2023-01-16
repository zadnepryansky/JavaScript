function myFn (a, b){
    let c
    a = a + 1
    c = a + b
    return c 
}

console.dir(myFn.name)
console.dir(myFn.length)
console.dir(myFn.caller)
console.dir(myFn.arguments)
console.dir(myFn.prototype)