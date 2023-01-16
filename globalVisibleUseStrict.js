
'use strict'         // command

function myFn() {
    a = true         // ReferenceError: a is not defined
    console.log(a)
}

myFn()