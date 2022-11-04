const db = require('../config/database');

// creating an origin
const createOrigin = async (body) => {
  const { name, continent, country } = body;

  const { rows } = await db.query(
    'INSERT INTO origins (name, continent, country) VALUES ($1, $2, $3) RETURNING *',
    [name, continent, country]
  );

  return rows[0];
}


//getting all origins
const getAllOrigins = async () => {
  const { rows } = await db.query(
    'SELECT * FROM origins'
  );

  return rows;
}


//editing origin
const editOrigin = async (id, body) => {
  const { name, continent, country } = body;

  const { rows } = await db.query(
    'UPDATE origins SET name = $1, continent = $2, country = $3 WHERE id = $4 RETURNING *',
    [name, continent, country, id]
  );

  return rows[0];
}


//deleting an origin
const deleteOrigin = async (id) => {
  //checking origin exists in db
  const { rows } = await db.query('SELECT * FROM "origins" WHERE id = $1', [id]);

  if (!rows[0]) {
    throw new Error('Origin does not exist');
  }

  const { rows: deletedOrigin } = await db.query(
    'DELETE FROM "origins" WHERE id = $1 RETURNING *',
    [id]
  );

  return deletedOrigin[0];
}

module.exports = {
  createOrigin,
  getAllOrigins,
  editOrigin,
  deleteOrigin
}
