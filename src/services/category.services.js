const db = require('../config/database');

// creating category
const createCategory = async (body) => {
  const { name, group_id } = body;

  const { rows } = await db.query(
    'INSERT INTO categories (name, group_id) VALUES ($1, $2) RETURNING *',
    [name, group_id]
  );

  return rows[0];
};


//getting all catrgories
const getAllCategories = async () => {
  const { rows } = await db.query('SELECT * FROM categories');

  return rows;
}


//editing category
const editCategory = async (id, body) => {
  // checking Category exists
  const { rows } = await db.query('SELECT * FROM "categories" WHERE id = $1', [id]);
  if (!rows[0]) {
    throw new Error('Category does not exist');
  }
  const { name, group_id } = body;

  const { rows: editedCategory } = await db.query(
    'UPDATE "categories" SET name = $1, group_id = $2 WHERE id = $3 RETURNING *',
    [name, group_id, id]
  );

  return editedCategory[0];
}


//delete category
const deleteCategory = async (id) => {
  // checking category exists
  const { rows } = await db.query('SELECT * FROM "categories" WHERE id = $1', [id]);
  if (!rows[0]) {
    throw new Error(`Category does not exist`);
  }

  const { rows: deletedCategory } = await db.query(
    'DELETE FROM categories WHERE id = $1 RETURNING *',
    [id]
  );

  return deletedCategory[0];
}

module.exports = {
  createCategory,
  getAllCategories,
  editCategory,
  deleteCategory
} 