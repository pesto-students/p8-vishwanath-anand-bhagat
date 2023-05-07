const validator = require('validator');
const querystring = require('querystring');

const Fund = require('../models/fund');

exports.createFund = async (req, res, next) => {
    const { name, date, amount, type } = req.body;
  
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

    if (!type || !validator.isIn(type, ['income', 'expense'])) {
        errors.name = ['The type must be either income or expense'];
    }

    if(Object.keys(errors).length > 0){
        res.status(400).json({ errors });
    }
  
    try {
        const user = req.user._id;
        const fund_new = new Fund({ name, date, amount, user, type });
    
        await fund_new.save();

        const fund = await Fund.findById(fund_new._id).populate('user');
    
        res.status(200).json({ fund });
    } catch (err) {
      next(err);
    }
};

exports.getFunds = async (req, res, next) => {
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
      
        const funds = await Fund.find({date: {'$gte': start_date, '$lte': end_date}}).populate('user');

        res.status(200).json({ funds });
    } catch (err) {
      next(err);
    }
};

exports.getFundById = async (req, res, next) => {
    const _id = req.params.id;
  
    try {
        const fund = await Fund.findById(_id).populate('user');

        res.status(200).json({ fund });
    } catch (err) {
      next(err);
    }
};

exports.updateFund = async (req, res, next) => {
    const { name, date, amount, type } = req.body;
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

    if (!type || !validator.isIn(type, ['income', 'expense'])) {
        errors.name = ['The type must be either income or expense'];
    }

    if(Object.keys(errors).length > 0){
        res.status(400).json({ errors });
    }
  
    try {
        await Fund.updateOne({ _id }, { name, amount, date, type});
        const fund = await Fund.findById(_id).populate('user');
    
        res.status(200).json({ fund });
    } catch (err) {
      next(err);
    }
};

exports.deleteFund = async (req, res, next) => {
    const _id = req.params.id;
    try {
        await Fund.deleteOne({ _id });

        res.status(200).json({ 'message': "Fund Deleted Successfully." });
    } catch (err) {
      next(err);
    }
};