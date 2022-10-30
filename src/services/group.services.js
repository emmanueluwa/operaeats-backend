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


// retrieving all groups
const getAllGroups = async () => {
  const { rows } = await db.query('SELECT * FROM "groups"');

  return rows;
}


// deleting a group
const deleteGroup = async (id) => {
  //checking if group id exists
  const { rows } = await db.query('SELECT * FROM "groups" WHERE id = $1', [id]);
  if (!rows[0]) {
    throw new Error(`Group does not exist`);
  }

  const deletedGroup = await db.query('DELETE FROM "groups" WHERE id = $1 RETURNING*', [id]);

  return deletedGroup.rows[0];
}

module.exports = {
  createGroup,
  getAllGroups,
  deleteGroup
}