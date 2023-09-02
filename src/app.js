import express from "express";
import books from "./models/Book.js";
import db from "./config/dbConnect.js";

const app = express();
db.on("error", console.log.bind(console, "error connecting"));
db.once("open", () => console.log("sucessfuly connected"));

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Node Course");
});

app.get("/books", async (req, res) => {
    const response = await books.find({}).exec();

    try {
        res.status(200).json(response);
    } catch(error){
        res.send("error on getting response", error)
    }
});

app.get("/books/:id", (req, res) => {
    const bookIndex = bookListMocked.findIndex(book => book.id == req.params?.id);
    res.json(bookListMocked[bookIndex]);
});

app.post("/books", (req, res) => {
    bookListMocked.push(req.body);
    res.status(201).send("Livro adicionado com sucesso");
});

app.put("/books/:id", (req, res) => {
    const bookIndex = bookListMocked.findIndex(book => book.id == req.params.id);
    bookListMocked[bookIndex].bookName = req.body.bookName;
    res.json(bookListMocked);
});

app.delete("/books/:id", (req, res) => {
    const {id} = req.params;
    const bookIndex = bookListMocked.findIndex(book => book.id == req.params.id);
    bookListMocked.splice(bookIndex, 1);
    res.send(`Book ${id} deleted`);
});

export default app;