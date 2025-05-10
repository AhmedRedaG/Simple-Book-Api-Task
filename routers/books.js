import Router from "express";

import {
  getBooks,
  getBookById,
  postCreateBook,
  deleteBook,
  patchUpdateBook,
} from "../controllers/books.js";

const router = Router();

router.get("/", getBooks);

router.get("/:id", getBookById);

router.post("/", postCreateBook);

router.patch("/:id", patchUpdateBook);

router.delete("/:id", deleteBook);

export default router;
