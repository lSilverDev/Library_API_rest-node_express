import { response } from "express";
import books from "../models/Book.js";

class BookController{

    static getAllBooks = (request, response) => {
        books.find()
            .populate('author')
            .exec((err, books) => {
                response.status(200).json(books);
            })
    }

    static getBookByID = (request, response) => {
        const id = request.params.id;

        books.findById(id)
            .populate('author', 'name')
            .exec((err, books) => {
                if(!err){
                    response.status(200).send(books);
                } else {
                    response.status(400).send({
                        message: "Error: " + err.message + " book not found",
                    });
                }
            })
    }

    static setBook = (request, response) => {
        let book = new books(request.body);

        book.save((err) => {
            if(err){
                response.status(500).send({
                    message: "Error:" + err.message
                });
            } else {
                response.status(201).send(book.toJSON());
            }
        });
    }

    static updateBookTitle = (request, response) => {
        const id = request.params.id;

        books.findByIdAndUpdate(id, {
            $set: request.body
        }, (err) => {
            if(!err){
                response.status(200).send({
                    message: "Book updated"
                });
            } else {
                response.status(500).send({
                    message: "Error:" + err.message,
                });
            }
        })
    }

    static deleteBookByID = (request, response) => {
        const id = request.params.id;

        books.findByIdAndDelete(id, 
            (err) => {
                if(!err){
                    response.status(200).send({
                        message: "book deleted",
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

export default BookController;