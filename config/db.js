const { createPool } = require("mysql");
require("dotenv/config");

const db = createPool({
  port: 3306,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: 10,
});

module.exports = db;
