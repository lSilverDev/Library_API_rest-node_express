import express from "express";
import books from "../routes/booksRoutes.js";
import author from "../routes/authorRoutes.js"

const routes = (app) => {
    app.route('/').get((request, response) => {
        response.status(200).send({Title: "Node API"});
    })

    app.use(
        express.json(),
        books,
        author
    )
}

export default routes;

