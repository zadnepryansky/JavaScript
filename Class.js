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

// Check:
firsComment.hasOwnProperty('text')   // true
firsComment.hasOwnProperty('votesQty')   // true
firsComment.hasOwnProperty('upvote')   // false
firsComment.hasOwnProperty('hasOwnProperty')   // false

// Create another exemplar Classes example:
const secondComment = new Comment('Second comment')
const thirdComment = new Comment('Third comment')

const myOwnComment = new Comment('My own comment')

myOwnComment.upvote()

console.log(myOwnComment.votesQty)  // 1

// prototype __proto__
console.log(Comment.prototype === myOwnComment.__proto__)  // true