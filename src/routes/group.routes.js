const router = require('express-promise-router')();
const groupController = require('../controllers/group.controller');

router.post('/groups', groupController.createGroup);

module.exports = router;