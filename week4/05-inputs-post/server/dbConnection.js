//imports
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

export const db = new pg.Pool({ // connect to db using .env (environment variable) for db url/password
  connectionString: process.env.DATABASE_URL,
});