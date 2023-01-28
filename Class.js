class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }
    upvote() {
        this.votesQty += 1 
    }
}
const firsComment = new Comment('Firs comment')

console.log(firsComment) // Comment { text: 'Firs comment', votesQty: 0 }

// instanseof:
firsComment instanceof Comment // true
firsComment instanceof Object  // true

firsComment.upvote() // + 1
console.log(firsComment.votesQty) // 1
firsComment.upvote()
console.log(firsComment.votesQty)  // 2

console.log(firsComment)  // Comment { text: 'Firs comment', votesQty: 2 }