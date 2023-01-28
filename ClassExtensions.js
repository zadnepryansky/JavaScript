class NumbersArray extends Array {
    sum() {
        return this.reduce((el, acc) => acc += el, 0)  // acc - acumulator :) 
    }
}

// Update class Array using own method sum(), witch is able to sum all numbers in Array
const myArray = new NumbersArray(2, 5, 7)

console.log(myArray)
myArray.sum()

console.log(NumbersArray.prototype === myArray.__proto__)  // true


// MORE PRACTICE WITH REDUCE!