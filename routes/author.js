const express = require("express");
const authorController = require("../controllers/authorController");

const router = express.Router();

router.get('/', authorController.getAllAuthor);

//router.get('/:id', getAuthor);

router.post('/', authorController.createAuthor);

//router.put('/:id', updateAuthor);

//router.delete('/:id', deleteAuthor);

module.exports = router;