const timerPromise = () =>
    new Promise((resolve, reject) =>   // return Promise
        setTimeout(() => resolve(), 2000))

const asyncFunction = async () => {
    console.log('Timer starts')
    const startTime = performance.now()  // updade example
    await timerPromise()  // waait the result of Promise 
    const endTime = performance.now()          
    console.log('Timer ended', endTime - startTime)
}

asyncFunction()

// Timer starts
// Timer ended 2000.6933329105377