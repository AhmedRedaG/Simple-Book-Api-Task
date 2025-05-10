import { ObjectId } from "mongodb";

import { db } from "../app.js";

class Book {
  static createBook(book) {
    return db.collection("books").insertOne(book);
  }
  static getAllBooks(page, limit) {
    return db
      .collection("books")
      .find()
      .sort({ title: 1 })
      .skip(page * limit)
      .limit(limit)
      .toArray();
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
