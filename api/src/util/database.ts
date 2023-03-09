import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ElParron",
  password: "admin",
  port: 5432,
  keepAlive: true,
});

pool.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Database Connect");
  }
});
export default pool;
