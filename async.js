// Syntax 1:
async function asyncFn(){
    // return Promise
}

// Syntax 2:
const asyncFn1 = async () => {
    // return Promise
}

// Example 1
const asyncMyFn = async () => {
    return 'Success'
}

asyncMyFn()
    .then(value => console.log(value))  // Success

// Example with error

const asyncMyFnWithError = async () => {
    throw new Error('There was an error!')
}

asyncMyFnWithError()
    .then(value => console.log(value))
    .catch(error => console.log(error.message))  // There was an error!