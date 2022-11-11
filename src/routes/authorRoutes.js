import express from "express";
import authorController from "../controllers/authorController.js"

const router = express.Router();

router
    .get("/author", authorController.getAllAuthors)
    .get("/author/:id", authorController.getAuthorByID)
    .post("/author", authorController.setAuthor)
    .put("/author/:id", authorController.updateAuthor)
    .delete("/author/:id", authorController.deleteAuthorByID)

export default router;