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
  constructor(
    title,
    author,
    isbn,
    publisher,
    publicationYea,
    genre,
    available
  ) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.publisher = publisher;
    this.publicationYear = publicationYea;
    this.genre = genre;
    this.available = available;
  }

  static createBook(book) {
    return db.collection("books").insertOne(book);
  }

  static getAllBooks() {
    // const books = db.collection("books").find().toArray();
    // console.log(books);
    // console.log(db);
    // console.log(db.collection("books"));
    return db.collection("books").find().toArray();
  }
  static getBookById(id) {
    if (ObjectId.isValid(id)) {
      return db.collection("books").findOne({ _id: new ObjectId(id) });
    } else {
      return Promise.reject(new Error("Invalid book id"));
    }
  }
  // static deleteBook(isbn) {
  //   return db.collections("books").deleteOne({ isbn: isbn });
  // }
  // static updateBook(isbn, book) {
  //   return db.collections("books").updateOne({ isbn: isbn }, { $set: book });
  // }
}

export default Book;
