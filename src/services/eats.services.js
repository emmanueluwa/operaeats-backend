const db = require('../config/database');

//creating a new eat
const createEat = async (body) => {
  const { title, diet_type, difficulty, eat_types, description, origin_id, group_id, category_id } = body;

  const { rows } = await db.query(
    `INSERT INTO eats (title, diet_type, difficulty, eat_types, description, origin_id, group_id, category_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *`,
    [title, diet_type, difficulty, eat_types, description, origin_id, group_id, category_id]
  )

  return rows[0];
}


//getting all eats
const getAllEats = async () => {
  const { rows } = await db.query('SELECT * FROM eats');

  return rows;
}


//updating an eat
const updateEat = async (id, body) => {
  const { title, diet_type, difficulty, eat_types, description, origin_id, group_id, category_id } = body;

  const { rows } = await db.query(
    'UPDATE eats SET title = $1, diet_type = $2, difficulty = $3, eat_types = $4, description = $5, origin_id = $6, group_id = $7, category_id = $8 WHERE id = $9 RETURNING *',
    [title, diet_type, difficulty, eat_types, description, origin_id, group_id, category_id, id]
  );

  return rows[0];
}


//deleting an eat
const deleteEat = async (id) => {
  const { rows } = await db.query('DELETE FROM eats WHERE id = $1 RETURNING *', [id]);

  return rows[0];
}

module.exports = {
  createEat,
  getAllEats,
  updateEat,
  deleteEat
}