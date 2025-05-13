import { MongoClient } from "mongodb";
import { config } from "dotenv";

config();

const uri = process.env.MONGODB_URI;

let db;

export async function connectDb() {
  const client = new MongoClient(uri);

  await client.connect();
  db = client.db();
}

export function getDb() {
  return db;
}
