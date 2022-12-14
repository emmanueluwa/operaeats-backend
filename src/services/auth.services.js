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


//getting active user
const activeUser = async (token) => {
  //decoding token
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

  //getting user that matches token from db
  const { rows } = await db.query(
    `SELECT users.id, users.name, users.email, 
    json_agg(profiles.*) AS profile 
    FROM users 
    JOIN profiles ON users.id = profiles.user_id
    WHERE users.id = $1
    GROUP BY users.id`,

    [decodedToken.id]);

  return rows[0];
}

module.exports = {
  loginUser,
  activeUser
}