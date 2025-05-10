//  createBook, updateBook, deleteBook
import Book from "../models/books.js";

export const getBooks = (req, res) => {
  Book.getAllBooks()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
};

export const getBookById = (req, res) => {
  const id = req.params.id;
  Book.getBookById(id)
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({
          message: `Not found Book with id ${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while retrieving book.",
      });
    });
};

export const createBook = (req, res) => {
  const book = new Book(req.body);
  Book.createBook(book)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the book.",
      });
    });
};
