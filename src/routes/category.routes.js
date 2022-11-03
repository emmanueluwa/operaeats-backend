const router = require('express-promise-router')();
const categoryController = require('../controllers/category.controller');
const auth = require('../middlewares/auth.middleware');

router.post('/categories', auth, categoryController.createCategory);
router.get('/categories', auth, categoryController.getAllCategories);
router.put('/categories/:category_id', auth, categoryController.editCategory);
router.delete('/categories/:category_id', auth, categoryController.deleteCategory);


module.exports = router;