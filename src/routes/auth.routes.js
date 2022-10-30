const router = require('express-promise-router')();
const authController = require('../controllers/auth.controller');

router.post('/login', authController.userLogin);
router.post('/logout', authController.userLogout);
router.get('/active', authController.userActive);


module.exports = router;