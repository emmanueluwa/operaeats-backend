const router = require('express-promise-router')();
const originController = require('../controllers/origin.controller');
const auth = require('../middlewares/auth.middleware');

router.post('/origins', auth, originController.createOrigin);
router.get('/origins', auth, originController.getAllOrigins);
router.put('/origins/:origin_id', auth, originController.editOrigin);
router.delete('/origins/:origin_id', auth, originController.deleteOrigin);

module.exports = router;