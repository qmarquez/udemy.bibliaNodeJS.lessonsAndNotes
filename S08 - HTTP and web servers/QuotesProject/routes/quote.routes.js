const router = require('express').Router();
const { quoteController } = require('../controllers');

router.get('/', quoteController.index);
router.get('/all', quoteController.get);
router.post('/', quoteController.add);

module.exports = router;