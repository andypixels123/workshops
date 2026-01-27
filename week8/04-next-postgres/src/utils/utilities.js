import pg from "pg";
// console.log("dbconn imported");

export const db = new pg.Pool({
    connectionString: process.env.NEXT_PUBLIC_DATABASE_URL,
});