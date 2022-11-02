const db = require('../config/database');

// creating category
const createCategory = async (body) => {
  const { name, sector_id } = body;

  const { rows } = await db.query(
    'INSERT INTO categories (name, sector_id) VALUES ($1, $2) RETURNING *',
    [name, sector_id]
  );

  return rows[0];
};


//getting all catrgories
const getAllCategories = async () => {
  const { rows } = await db.query('SELECT * FROM categories');

  return rows;
}


//editing category
const editCategory = async (body, id) => {
  const { name, sector_id } = body;

  const { rows } = await db.query(
    'UPDATE categories SET name = $1, sector_id = $2 WHERE id = $3 RETURNING *',
    [name, sector_id, id]
  );

  return rows[0];
}


//delete category
const deleteCategory = async (id) => {
  const { rows } = await db.query(
    'DELETE FROM categories WHERE id = $1 RETURNING *',
    [id]
  );

  return rows[0];
}

module.exports = {
  createCategory,
  getAllCategories,
  editCategory,
  deleteCategory
} 