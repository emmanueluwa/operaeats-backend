const db = require('../config/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//logging in user
const loginUser = async (body) => {
  const { email, password } = body;

  //getting user from db
  const { rows } = await db.query('SELECT * FROM users WHERE email = $1', [email]);
  if (rows.length === 0) {
    throw new Error('Username or password is incorrect');
  }

  //comparing password to hashed password in db
  const passwordMatch = await bcrypt.compare(password, rows[0].password);
  if (!passwordMatch) {
    throw new Error('Username or password is incorrect')
  }

  //generating token for user
  const token = jwt.sign(
    { id: rows[0].id },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN, }
  )

  return token;
};

module.exports = {
  loginUser,
}