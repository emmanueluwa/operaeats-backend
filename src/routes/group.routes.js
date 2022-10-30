const router = require('express-promise-router')();
const groupController = require('../controllers/group.controller');
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

router.post('/groups', upload.single('image'), groupController.createGroup);

module.exports = router;