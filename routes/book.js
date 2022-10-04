const bookController = require("../controllers/bookController");
const { route } = require("./author");

const router = require("express").Router();

//ADD BOOK
router.post("/", bookController.addOfBook);

//GET ALL BOOK
router.get("/", bookController.getAllBooks);

//GET A BOOK
router.get("/:id", bookController.getABook);

//UPDATE A BOOK
router.put("/:id", bookController.updateBook);

//DELETE BOOK
router.delete("/:id", bookController.deleteBook);
module.exports = router;