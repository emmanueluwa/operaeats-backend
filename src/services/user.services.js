const db = require('../config/database');

// create a new user
const createUser = async (body) => {
  const { name, email, password, confirm_password } = body;
  const { rows } = await db.query(
    'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING =',
    [name, email, password],
  );
  //return the user details just saved
  return rows[0];
}


//exporting functions
module.exports = {
  createUser,
};