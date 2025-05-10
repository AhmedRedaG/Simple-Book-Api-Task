import express from "express";

import { connectDb } from "./database/db.js";
import rootRouter from "./routers/root.js";
import booksRouter from "./routers/books.js";
import errorRouter from "./routers/error.js";

const app = express();

const port = 3000;

connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`database connected and server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(`Failed to connect to database: ${err.message}`);
  });

app.use(express.json());

app.use("/books", booksRouter);
app.use("/", rootRouter);
app.use(errorRouter);
