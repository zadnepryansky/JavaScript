function myFn(a) {
    console.log(a);
}

const b = true;
let c = 10;

myFn(2 + 3)
myFn(b)
myFn(c = c + 1)

myFn(b = 3)  // Assignment to constant variable.

// myFn(c = c + 1;) // error
myFn(let (d))   // let is not defined
