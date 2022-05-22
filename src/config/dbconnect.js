import mongoose from "mongoose";

mongoose.connect("mongodb+srv://patrick:1234@praticando.giday.mongodb.net/node");
// ")

let db = mongoose.connection;

export default db;