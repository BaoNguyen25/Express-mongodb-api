const express = require("express");
const bookController = require("../controllers/bookController");

const router = express.Router();

router.get('/', bookController.getAllBook);

//router.get('/:id', getBook);

router.post('/', bookController.createBook);

//router.put('/:id', updateBook);

//router.delete('/:id', deleteBook);

module.exports = router;