import express from "express";

const app = express();

const books =[
    {
        id: 1,
        title: "The man who sold the world"
    },
    {
        id: 2,
        title: "the woman who sold the world"
    }
];

app.get('/', (request, response) => {
    response.status(200).send('Node course');
})

app.get('/books', (request, response) => {
    response.status(200).json(books);
})

export default app;
