import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        id: {type: String},
        title: {type: String, required: true},
        author: {type: String, required: true},
        pubCompany: {type: String, required: true},
        pags : {type: String}
    }
);

const books = mongoose.model('books', bookSchema);

export default books;