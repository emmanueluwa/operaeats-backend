const router = require('express-promise-router')();
const userController = require('../controllers/user.controller');

//if post request recieved to users/ let createUser function handle it
router.post('/users', userController.createUser);

module.exports = router;