const fnError = () => {
    throw new Error('New error')
}

try {
    fnError()
} catch (error) {
    console.error(error)
    console.log(error.message)
}

console.log('Code after Error...')