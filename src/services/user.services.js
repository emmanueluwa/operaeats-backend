const db = require('../config/database');
const bcrypt = require('bcrypt');

// create a new user
const createUser = async (body) => {
  const { name, email, password, confirm_password } = body;

  //checking if user already exists
  const checkUser = await db.query('SELECT * FROM users WHERE email = $1', [
    email,
  ]);

  if (checkUser.rows.length > 0) {
    throw new Error('User already exists');
  }


  //checking if passwords match
  if (password !== confirm_password) {
    throw new Error('Passwords do not match');
  }

  //hashing password
  const hashedPassword = await bcrypt.hash(password, 10);


  const { rows } = await db.query(
    'INSERT INTO "users" (name, email, password) VALUES ($1, $2, $3) RETURNING *',
    [name, email, hashedPassword],
  );
  //return the user details just saved
  return rows[0];
}


//exporting functions
module.exports = {
  createUser,
};