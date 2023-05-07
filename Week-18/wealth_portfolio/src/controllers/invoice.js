const Invoice = require('../models/invoice');

const validator = require('validator');
const querystring = require('querystring');

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

exports.createInvoice = [upload.single('file'), async (req, res, next) => {
    const { name, date, amount } = req.body;
    const file = req.file;
    const errors = {};

    if (!name || !validator.isLength(name, { min: 2, max: 50 })) {
        errors.name = ['Name must be between 2 and 50 characters'];
    }

    if (!date || !validator.isISO8601(date)) {
        errors.date = ['Date must be in format (YYYY-MM-DD)'];
    }

    if (!amount || !validator.isDecimal(amount)) {
        errors.amount = ['Amount must be a decimal number'];
    }

    if (!file) {
        errors.file = ['File is required'];
    }

    if (Object.keys(errors).length > 0) {
        res.status(400).json({ errors });
    }

    try {
        const user = req.user._id;

        const invoice = new Invoice({
            name,
            date,
            amount,
            user,
            file: {
                data: file.buffer,
                contentType: file.mimetype,
            },
        });

        await invoice.save();

        res.status(201).json({ invoice });
    } catch (err) {
        next(err);
    }
}];

exports.getInvoiceById = async (req, res, next) => {
    const _id = req.params.id;
  
    try {
        const invoice = await Invoice.findById(_id).populate('user');

        res.status(200).json({ invoice });
    } catch (err) {
      next(err);
    }
};

exports.getInvoiceFile = async (req, res, next) => {
    const _id = req.params.id;
  
    try {
        const invoice = await Invoice.findById(req.params.id);
    
        if (!invoice) {
            return res.status(404).json({ message: 'Invoice not found' });
        }
    
        if (!invoice.file || !invoice.file.data) {
            return res.status(404).json({ message: 'Image not found' });
        }
    
        res.set('Content-Type', invoice.file.contentType);
        res.send(Buffer.from(invoice.file.data, 'base64'));
    } catch (err) {
        next(err);
    }
}

exports.deleteInvoice = async (req, res, next) => {
    const _id = req.params.id;
    try {
        await Invoice.deleteOne({ _id });

        res.status(200).json({ 'message': "Invoice Deleted Successfully." });
    } catch (err) {
      next(err);
    }
};