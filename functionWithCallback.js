function anotherFunctiob() {
    console.log('something')
}

function fnWithCallback(callbackFunction) {
    callbackFunction()
}

fnWithCallback(anotherFunctiob)

console.log(fnWithCallback(anotherFunctiob))  // something, undefined
