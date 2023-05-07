const express = require('express');
const router = express.Router();
const fundController = require('../controllers/fund');

const isAuthenticated = require('../middlewares/isAuthenticated');

router.use(isAuthenticated);

router.post('/', fundController.createFund);
router.get('/', fundController.getFunds);
router.get('/:id', fundController.getFundById);
router.put('/:id', fundController.updateFund);
router.delete('/:id', fundController.deleteFund);

module.exports = router;
