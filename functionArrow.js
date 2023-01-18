const functionArrow = (value, multilier=2) => {
    return value * multilier
}


console.log(functionArrow(2))    // 2 * 2 = 4
console.log(functionArrow(2, 5))  // 2 * 5 = 10


const arrowFunc = (a) => a * 2    // Arrow function without {}

console.log(arrowFunc(2)) // 2 * 2 = 4
console.log(arrowFunc(5))  // 2 * 5 = 10