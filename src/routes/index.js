import express from "express";
import books from "../routes/booksRoutes.js";

const routes = (app) => {
    app.route('/').get((request, response) => {
        response.status(200).send({Title: "Node API"});
    })

    app.use(
        express.json(),
        books
    )
}

export default routes;

