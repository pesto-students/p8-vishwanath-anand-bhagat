const validator = require('validator');
const querystring = require('querystring');

const Equity = require('../models/equity');

exports.createEquity = async (req, res, next) => {
    const { name, date, amount } = req.body;
  
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

    if(Object.keys(errors).length > 0){
        res.status(400).json({ errors });
    }
  
    try {
        const user = req.user._id;
        const equity_new = new Equity({ name, date, amount, user });
    
        await equity_new.save();

        const equity = await Equity.findById(equity_new._id).populate('user');
    
        res.status(200).json({ equity });
    } catch (err) {
      next(err);
    }
};

exports.getEquities = async (req, res, next) => {
    const queryString = req.query;

    const start_date = queryString.startdate;
    const end_date = queryString.enddate;

    const errors = {};

    if (!start_date || !validator.isISO8601(start_date)) {
        errors.date = ['Start Date must be in format (YYYY-MM-DD)'];
    }

    if (!end_date || !validator.isISO8601(end_date)) {
        errors.date = ['End Date must be in format (YYYY-MM-DD)'];
    }

    if (!errors.start_date && !errors.end_date) {
        if (!validator.isBefore(start_date, end_date)) {
          errors.start_date = ['Start date must be before end date'];
        }
    }

    if(Object.keys(errors).length > 0){
        res.status(400).json({ errors });
    }
  
    try {
      
        const equities = await Equity.find({date: {'$gte': start_date, '$lte': end_date}}).populate('user');

        res.status(200).json({ equities });
    } catch (err) {
      next(err);
    }
};

exports.getEquityById = async (req, res, next) => {
    const _id = req.params.id;
  
    try {
        const equity = await Equity.findById(_id).populate('user');

        res.status(200).json({ equity });
    } catch (err) {
      next(err);
    }
};

exports.updateEquity = async (req, res, next) => {
    const { name, date, amount } = req.body;
    const _id = req.params.id;
  
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

    if(Object.keys(errors).length > 0){
        res.status(400).json({ errors });
    }
  
    try {
        await Equity.updateOne({ _id }, { name, amount, date});
        const equity = await Equity.findById(_id).populate('user');
    
        res.status(200).json({ equity });
    } catch (err) {
      next(err);
    }
};

exports.deleteEquity = async (req, res, next) => {
    const _id = req.params.id;
    try {
        await Equity.deleteOne({ _id });

        res.status(200).json({ 'message': "Equity Deleted Successfully." });
    } catch (err) {
      next(err);
    }
};