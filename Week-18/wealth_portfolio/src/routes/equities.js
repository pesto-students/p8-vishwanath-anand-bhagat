const express = require('express');
const router = express.Router();
const equityController = require('../controllers/equity');

const isAuthenticated = require('../middlewares/isAuthenticated');

router.use(isAuthenticated);

router.post('/', equityController.createEquity);
router.get('/', equityController.getEquities);
router.get('/:id', equityController.getEquityById);
router.put('/:id', equityController.updateEquity);
router.delete('/:id', equityController.deleteEquity);

module.exports = router;
