const eatController = require('../controllers/eats.controller');
const router = require('express-promise-router')();
const auth = require('../middlewares/auth.middleware');

router.post('/eats', auth, eatController.createEat);
router.get('/eats', auth, eatController.getAllEats);
router.put('/eats/:eat_id', auth, eatController.updateEat);
router.delete('/eats/:eat_id', auth, eatController.deleteEat);

module.exports = router;