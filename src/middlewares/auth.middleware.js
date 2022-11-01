const db = require('../config/database');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const auth = async (req, res, next) => {
  //retreiving session toke 
  const token = req.session.token;

  //if token not there
  if (!token) {
    return res.status(401).send({ error: 'Please login' });
  }

  // if token available
  try {
    //decode token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // retrieving user from db
    const { rows } = await db.query(
      'SELECT * FROM users WHERE id =$1',
      [decodedToken.id]
    )

    if (!rows[0]) {
      throw new Error('User not found');
    }

    //Attaching user to request, allows us to access req.user elsewhere
    req.user = rows[0];

    //continuing to next middleware
    next();

  } catch (error) {
    return res.status(401).send({ error: error.message });
  }
}


module.exports = auth;