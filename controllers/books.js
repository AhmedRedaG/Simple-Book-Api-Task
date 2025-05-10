import Book from "../models/books.js";

export const getBooks = (req, res) => {
  const page = Number(req.query.page) || 0;
  const limit = Number(req.query.limit) || 10;
  Book.getAllBooks(page, limit)
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

export const postCreateBook = (req, res) => {
  const book = req.body;
  Book.createBook(book)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while creating the book.",
      });
    });
};

export const patchUpdateBook = (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  Book.updateBook(id, updates)
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
        message: err.message || "Error updating Book with id " + id,
      });
    });
};

export const deleteBook = (req, res) => {
  const id = req.params.id;
  Book.deleteBook(id)
    .then((data) => {
      if (data) {
        res.json({
          message: "Book was deleted successfully!",
        });
      } else {
        res.status(404).json({
          message: `Not found Book with id ${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Could not delete Book with id " + id,
      });
    });
};
