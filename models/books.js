import { ObjectId } from "mongodb";

import { getDb, connectDb } from "../database/db.js";
let db;

connectDb()
  .then(() => {
    db = getDb();
  })
  .catch((err) => {
    console.error(`Failed to connect to database: ${err.message}`);
  });

class Book {
  static createBook(book) {
    return db.collection("books").insertOne(book);
  }
  static getAllBooks() {
    return db.collection("books").find().toArray();
  }
  static getBookById(id) {
    if (ObjectId.isValid(id)) {
      return db.collection("books").findOne({ _id: new ObjectId(id) });
    } else {
      return Promise.reject(new Error("Invalid book id"));
    }
  }
  static deleteBook(id) {
    if (ObjectId.isValid(id)) {
      return db.collection("books").deleteOne({ _id: new ObjectId(id) });
    } else {
      return Promise.reject(new Error("Invalid book id"));
    }
  }
  static updateBook(id, updates) {
    if (ObjectId.isValid(id)) {
      return db
        .collection("books")
        .updateOne({ _id: new ObjectId(id) }, { $set: updates });
    } else {
      return Promise.reject(new Error("Invalid book id"));
    }
  }
}

export default Book;
