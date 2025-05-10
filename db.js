import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/books";

let db;

export async function connectDb() {
  const client = new MongoClient(uri);

  await client.connect();
  db = client.db();
}

export function getDb() {
  return db;
}
