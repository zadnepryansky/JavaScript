const expressionsFunc = function(value, multiplier = 2){
    return value * multiplier
}

console.log(expressionsFunc(2))   // 2 * 2 = 4
console.log(expressionsFunc(2, 5))  // 2 * 5 = 10