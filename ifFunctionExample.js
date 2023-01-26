const sumPositiveNumbers = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'One of the arguments is not a number'
    }
    if (a <= 0 || b <= 0) {
        return 'Numbers are not positive'
    }
    return a + b
}

console.log(sumPositiveNumbers(0, -1))  // Numbers are not positive
console.log(sumPositiveNumbers('hello', 5))  // One of the arguments is not a number
console.log(sumPositiveNumbers(5, 5))  // 10
