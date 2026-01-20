// import 'pg' package to manage postgres
import pg from "pg";
// import 'dotenv' package to manage .env file
import dotenv from "dotenv";

// config .env
dotenv.config();

// set up a connection pool with pg
export const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL
});