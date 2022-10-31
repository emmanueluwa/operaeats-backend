const router = require('express-promise-router')();
const authController = require('../controllers/auth.controller');
const auth = require('../middlewares/auth.middleware');

router.post('/login', authController.userLogin);
router.post('/logout', authController.userLogout);
router.get('/active', auth, authController.userActive);


module.exports = router;