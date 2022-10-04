const {Author,Book} = require("../model/model");

const authorController = {
    addAuthor: async(req, res) =>{
        try {
            const newAuthor = new Author(req.body);
            const saveAuthor = await newAuthor.save();
            res.status(200).json(newAuthor);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    //GET ALL AUTHOR
    getAllAuthor: async(req, res) => {
        try {
            const authors = await Author.find();
            res.status(200).json(authors);
        } catch (error) {
            res.status(500).json(error);
            
        }
    },

    //GET AN AUTHOR

    getAnAuthor: async(req, res) =>{
        try {
            const author = await Author.findById(req.params.id).populate("books");
            res.status(200).json(author);
        } catch (error) {
            res.status(500).json(error);
            
        }
    },
    
    //UPDATE AUTHOR
    updateAuthor: async(req, res) =>{
        try {
            const author = await Author.findById(req.params.id);
            await author.updateOne({$set: req.body});
            res.status(200).json("Update success!");

        } catch (error) {
            res.status(500).json(error);
        }
    },

    //DELETE AUTHOR
    deleteAuthor: async(req, res) =>{
        try {
            await Book.updateMany({author: req.params.id}, {author: null});
          await Author.findByIdAndDelete(req.params.id);  
          res.status(200).json("Update success!");

        } catch (error) {
            res.status(500).json(error);
            
        }
    }
};
module.exports = authorController;