const express = require('express');
const router = express.Router();
const fixedIncomeController = require('../controllers/fixed_income');

const isAuthenticated = require('../middlewares/isAuthenticated');

router.use(isAuthenticated);

router.post('/', fixedIncomeController.createFixedIncome);
router.get('/', fixedIncomeController.getFixedIncomes);
router.get('/:id', fixedIncomeController.getFixedIncomeById);
router.put('/:id', fixedIncomeController.updateFixedIncome);
router.delete('/:id', fixedIncomeController.deleteFixedIncome);

module.exports = router;
