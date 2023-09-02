import mongoose from "mongoose";

mongoose.connect("mongodb+srv://arthur-node-course:@node-course.7fl9t59.mongodb.net/node-course");

const db = mongoose.connection;

export default db;
