const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoice');

const isAuthenticated = require('../middlewares/isAuthenticated');

router.use(isAuthenticated);

router.post('/', invoiceController.createInvoice);
router.get('/:id', invoiceController.getInvoiceById);
router.get('/:id/file', invoiceController.getInvoiceFile);
router.delete('/:id', invoiceController.deleteInvoice);

module.exports = router;
