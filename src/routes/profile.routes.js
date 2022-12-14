const profileController = require('../controllers/profile.controllers');
const router = require('express-promise-router')();
const auth = require('../middlewares/auth.middleware');

router.post('/profiles', auth, profileController.createProfile);
router.put('/profiles/:user_id', auth, profileController.editProfile);

module.exports = router;