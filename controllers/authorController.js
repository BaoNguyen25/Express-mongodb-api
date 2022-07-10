const {Book,Author} = require("../model/model");

const authorController = {

    getAllAuthor : async (req, res) => {
        try{
            const authors = await Author.find();
            res.status(200).json(authors);
        }catch(err) {
            res.status(500).json(err);
        }
    },
    
    createAuthor : async (req, res) => {
        try{
            const newAuthor = new Author(req.body);
            const savedAuthor = await newAuthor.save();
            res.status(200).json(savedAuthor);
        }catch(err) {
            res.status(500).json(err);
        }
    },

    getAuthor : async (req, res) => {
        try {
            const author = await Author.findById(req.params.id).populate("books");
            res.status(200).json(author);
        }catch(err) {
            res.status(500).json(err);
        }
    }

};

module.exports = authorController
