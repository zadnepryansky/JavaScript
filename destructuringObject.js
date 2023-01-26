const userProfile = {
    name: 'Dima',
    commentsQty: 23,
    hasSignedAgreement: false,
}

const {name, commentsQty} = userProfile   // destructuring emaxmple
const {hasSignedAgreement} = userProfile  // can be in one line, or more lines

console.log(name)
console.log(commentsQty)