import sumNumbers from './moduleOne.mjs'

const res = sumNumbers(10, 2)
console.log(res)
// terminal 12


// run dode in terminal -> open terminal -> go to the modules folder -> write 'node moduleTwo.mjs'

// import example 2
import {
    one,
    two
} from './moduleOne.mjs'

console.log(one) // 1
console.log(two) // two