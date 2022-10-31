const router = require('express-promise-router')();
const groupController = require('../controllers/group.controller');
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const auth = require('../middlewares/auth.middleware');

router.post('/groups', auth, upload.single('image'), groupController.createGroup);
router.get('/groups', auth, groupController.getAllGroups);
router.delete('/groups/:group_id', auth, groupController.deleteGroup);
router.put('/groups/:group_id', auth, upload.single('image'), groupController.editGroup);

module.exports = router;