import express from "express";
import db from "./config/dbConnect.js";
import books from "./models/Book.js";

db.on("Error:", console.log.bind(console, 'Connection error!'));
db.once("open", ()=> {
    console.log("Connection sucessfull")
});

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    response.status(200).send('Node course');
})

app.get('/books', (request, response) => {
    books.find((err, books) => {
        response.status(200).json(books);
    });
})

app.get('/books/:id', (request, response) => {
    const index = findBook(request.params.id);
    response.status(200).json(books[index]);
})

app.post('/books', (request, response) => {
    books.push(request.body);
    response.status(201).send("book add!");
})

app.put('/books/:id', (request, response) => {
    const index = findBook(request.params.id);
    books[index].title = request.body.title;

    response.status(200).json(books);
})

app.delete('/books/:id', (request, response) => {
    let {id} = request.params;
    const index = findBook(id);

    books.splice(index, 1);

    response.status(200).send("book removed!");;
})

function findBook(id){
    return books.findIndex(book => book.id == id);
}

export default app;
