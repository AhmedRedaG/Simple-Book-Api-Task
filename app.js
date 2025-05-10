import express from "express";

import { connectDb, getDb } from "./db.js";

const app = express();

const port = 3000;
let db;

connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`database connected and server is running on port ${port}`);
      db = getDb();
    });
  })
  .catch((err) => {
    console.error(`Failed to connect to database: ${err.message}`);
  });

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});
