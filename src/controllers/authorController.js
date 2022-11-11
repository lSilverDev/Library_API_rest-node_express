import { response } from "express";
import author from "../models/Author.js";

class AuthorController{
    static getAllAuthors = (request, response) => {
        author.find((err, author) => {
            response.status(200).json(author);
        })
    }

    static getAuthorByID = (request, response) => {
        const id = request.params.id;

        author.findById(id, (err, author) => {
            if(!err){
                response.status(200).send(author);
            } else {
                response.status(400).send({
                    message: "Error: " + err.message + " author not found",
                });
            }
        })
    }

    static setAuthor = (request, response) => {
        let newAuthor = new author(request.body);

        newAuthor.save((err) => {
            if(err){
                response.status(500).send({
                    message: "Error:" + err.message
                });
            } else {
                response.status(201).send(newAuthor.toJSON());
            }
        });
    }

    static updateAuthor = (request, response) => {
        const id = request.params.id;

        author.findByIdAndUpdate(id, {
            $set: request.body
        }, (err) => {
            if(!err){
                response.status(200).send({
                    message: "author updated"
                });
            } else {
                response.status(500).send({
                    message: "Error:" + err.message,
                });
            }
        })
    }

    static deleteAuthorByID = (request, response) => {
        const id = request.params.id;

        author.findByIdAndDelete(id, 
            (err) => {
                if(!err){
                    response.status(200).send({
                        message: "author deleted",
                    });
                } else {
                    response.status(500).send({
                        message: "Error:" + err.message,
                    });
                }
            }
        )
    }
}

export default AuthorController;