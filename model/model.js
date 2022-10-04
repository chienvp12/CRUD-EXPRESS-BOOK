const mongoose = require("mongoose");

const  authorSchema = new mongoose.Schema({
    name: {
        type: String
    },
    year: {
        type: Number,
        require: true
    },
    books :[
        {
            type: mongoose.Types.ObjectId,
            ref: "Book"
        }
    ]
})

const bookShema = new mongoose.Schema({
    name: {
    type:   String,
    require: true
    },

    publishedDate:{
        type: String
    },
    genres: {
        type: [String]
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    },
});

let Book = mongoose.model("Book", bookShema);
let Author = mongoose.model("Author", authorSchema);
module.exports = {Book, Author};