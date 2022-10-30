const router = require('express-promise-router')();
const groupController = require('../controllers/group.controller');
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

router.post('/groups', upload.single('image'), groupController.createGroup);
router.get('/groups', groupController.getAllGroups);
router.delete('/groups/:group_id', groupController.deleteGroup);
router.put('/groups/:group_id', upload.single('image'), groupController.editGroup);

module.exports = router;