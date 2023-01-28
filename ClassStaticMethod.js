class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }
    upvote() {
        this.votesQty += 1 
    }
    static mergeComments(first, second) {
        return `${first} ${second}`
    }
}

// Static methot created on Class mrthod level. In this example - class Comment:
console.log(Comment.mergeComments('First comment.', 'Second comment.'))


