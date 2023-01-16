let a
let b

function myFn(){
    let b
    a = true
    b = 10
    console.log(a)
}

myFn()              // true

console.log(a)    // true
console.log(b)   // undefined