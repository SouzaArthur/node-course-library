import express from "express";

const app = express();

app.use(express.json());

const bookListMocked = [
    {id: 1, "bookName": "Bible"},
    {id: 2, "bookName": "Hitchicker's guide to the galaxy"},
];

app.get("/", (req, res) => {
    res.status(200).send("Node Course");
});

app.get("/books", (req, res) => {
    res.status(200).json(bookListMocked);
});

app.post("/books", (req, res) => {
    bookListMocked.push(req.body);
    res.status(201).send("Livro adicionado com sucesso");
});

export default app;