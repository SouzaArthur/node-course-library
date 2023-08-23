import express from "express";

const app = express();

const bookListMocked = [
    {id: 1, "bookName": "Bible"},
    {id: 2, "bookName": "Hitchicker's guide to the galaxy"},
];

app.get("/", (request, response) => {
    response.status(200).send("Node Course");
});

app.get("/books", (request, response) => {
    response.status(200).json(bookListMocked);
});

export default app;