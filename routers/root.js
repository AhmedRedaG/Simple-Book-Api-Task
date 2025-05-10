import Router from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Simple Book API",
    endpoints: [
      {
        method: "GET",
        path: "/books",
        description: "Get all books",
      },
      {
        method: "GET",
        path: "/books/:id",
        description: "Get a book by ID",
      },
      {
        method: "POST",
        path: "/books",
        description: "Create a new book",
      },
      {
        method: "PUT",
        path: "/books/:id",
        description: "Update a book by ID",
      },
      {
        method: "DELETE",
        path: "/books/:id",
        description: "Delete a book by ID",
      },
    ],
  });
});

export default router;
