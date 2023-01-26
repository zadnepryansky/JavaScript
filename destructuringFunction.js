const userProfile = {
    name: 'Dima',
    commentsQty: 23,
    hasSignedAgreement: false,
}

const userInfo = ({name, commentsQty}) => {
    if (!commentsQty) {
        return `User ${name} has no comments`
    }
    return `User ${name} has ${commentsQty} comments`
}

userInfo(userProfile)  // User Dima has 23 comments

console.log(userInfo(userProfile))  // View in screen - "User Dima has 23 comments"