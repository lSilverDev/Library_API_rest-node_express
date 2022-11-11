import express from "express";
import booksController from "../controllers/booksController.js"

const router = express.Router();

router
    .get("/books", booksController.getAllBooks)
    .get("/books/search", booksController.getBooksByPubCompany)
    .get("/books/:id", booksController.getBookByID)
    .post("/books", booksController.setBook)
    .put("/books/:id", booksController.updateBookTitle)
    .delete("/books/:id", booksController.deleteBookByID)

export default router;