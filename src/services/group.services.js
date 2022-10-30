const db = require('../config/database');

// creating group
const createGroup = async (body) => {
  const { name, image } = body;
  const { rows } = await db.query(
    'INSERT INTO groups (name, image) VALUES ($1, $2) RETURNING *',
    [name, image]
  );

  return rows[0];
}

module.exports = {
  createGroup,
}