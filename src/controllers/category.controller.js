const categoryServices = require('../services/category.services');

// create category
const createCategory = async (res, req) => {
  try {
    const createCategory = await categoryServices.createCategory(req.body);
    return res.status(200).json({ message: 'Category created', category });
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}


//get all categories
const getAllCategories = async (req, res) => {
  try {
    const getAllCategories = await categoryServices.getAllCategories();
    return res.status(200).json({ message: 'Categories retreived', getAllCategories })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}


// editing category
const editCategory = async (req, res) => {
  try {
    const category_id = req.params.id;
    const body = req.body;
    const editCategory = await categoryServices.editCategory(category_id, body);
    return res.status(200).json({ message: 'Category edited', editCategory });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


//deleting category
const deleteCategory = async (req, res) => {
  try {
    const category_id = req.params.id;
    const deleteCategory = await categoryServices.deleteCategory(category_id);
    return res.status(200).json({ message: 'Category deleted', deleteCategory });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createCategory,
  getAllCategories,
  editCategory,
  deleteCategory
}