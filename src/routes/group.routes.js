const router = require('express-promise-router')();
const groupController = require('../controllers/group.controller');
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

router.post('/groups', upload.single('image'), groupController.createGroup);
router.get('/groups', groupController.getAllGroups);
router.delete('/groups/:group_id', groupController.deleteGroup);

module.exports = router;