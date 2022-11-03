const categoryServices = require('../services/category.services');

// create category
const createCategory = async (req, res) => {
  try {
    const body = req.body;
    const createCategory = await categoryServices.createCategory(body);
    res.status(201).send(createCategory);
  } catch (error) {
    res.status(400).send(error.message)
  }
}


//get all categories
const getAllCategories = async (req, res) => {
  try {
    const getAllCategories = await categoryServices.getAllCategories();
    return res.status(200).json({ message: 'Categories retreived', getAllCategories })
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}


// editing category
const editCategory = async (req, res) => {
  try {
    const { category_id } = req.params;
    const body = req.body;
    const editedCategory = await categoryServices.editCategory(category_id, body);
    return res.status(200).send({ message: 'Category edited', editedCategory });
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
}


//deleting category
const deleteCategory = async (req, res) => {
  try {
    const { category_id } = req.params;
    const deleteCategory = await categoryServices.deleteCategory(category_id);
    return res.status(200).json({ message: 'Category deleted', deleteCategory });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

module.exports = {
  createCategory,
  getAllCategories,
  editCategory,
  deleteCategory
}