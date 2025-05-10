import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://books-user:kzFTYgR9ooboT3LF@cluster0.kcwxpvl.mongodb.net/books?retryWrites=true&w=majority&appName=Cluster0";

let db;

export async function connectDb() {
  const client = new MongoClient(uri);

  await client.connect();
  db = client.db();
}

export function getDb() {
  return db;
}
