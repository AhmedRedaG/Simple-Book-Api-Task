import express from "express";

import { connectDb, getDb } from "./database/db.js";
import rootRouter from "./routers/root.js";
import booksRouter from "./routers/books.js";
import errorRouter from "./routers/error.js";

const app = express();

const port = 3000;
let db;

connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`database connected and server is running on port ${port}`);
    });
    db = getDb();
  })
  .catch((err) => {
    console.error(`Failed to connect to database: ${err.message}`);
  });

export { db };

app.use(express.json());

app.use("/books", booksRouter);
app.use("/", rootRouter);
app.use(errorRouter);
