const post = {
    id: 1,
    author: 'Dima'
}

// const newPost = (post, addedAt = Date()) => ({
//     ...post,
//     addedAt
// })

const newPost = function(post, addedAt = Date()) {

    return Date()
}


const firstPost = {
    id: 1,
    author: 'Anna'
}

console.log(newPost(firstPost))
