const age = 7

if (age > 18) {
    console.log('Is adult')
} else if (age >= 12) {
    console.log('Is teenager')
} else {
    console.log('Is child')
}

// Example with just if - more user friendly ?

const age2 = 17

if (age2 >= 18) {
    console.log('Is adult')
}
if (age2 >= 12 && age2 < 18) {
    console.log('Is teenager')
} 
if (age2 < 12) {
    console.log('Is child')
}