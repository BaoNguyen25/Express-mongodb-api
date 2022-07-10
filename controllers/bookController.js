const {Book,Author} = require("../model/model");

const bookController = {

    getAllBook : async (req,res) => {
        try{
            const books = await Book.find();
            res.status(200).json(books);
        }catch (err) {
            res.status(500).json(err);
        }
    },

    createBook : async(req, res) => {
        try {
            const newBook = new Book(req.body);
            const savedBook = await newBook.save();
            if(req.body.author){
                const author = Author.findById(req.body.author);
                await author.updateOne({$push: {books: savedBook._id}});
            }
            res.status(200).json(savedBook);
        }catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = bookController;