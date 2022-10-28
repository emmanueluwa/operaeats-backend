const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

pool.on('connect', () => {
  console.log(`connected to database`);
});

//when db is connected it accepts and sends out text and params
module.exports = {
  query: (text, params) => pool.query(text, params),
};