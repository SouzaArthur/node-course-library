import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        id: { type: String },
        bookName: { type: String, require: true },
        author: { type: String, require: true },
        publisher: { type: String, require: true }
    }
);

const books = mongoose.model("book", bookSchema);

export default books;