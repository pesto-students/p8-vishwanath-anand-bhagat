const validator = require('validator');
const querystring = require('querystring');

const Asset = require('../models/asset');

exports.createAsset = async (req, res, next) => {
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
        const asset_new = new Asset({ name, date, amount, user });
    
        await asset_new.save();

        const asset = await Asset.findById(asset_new._id).populate('user');
    
        res.status(200).json({ asset });
    } catch (err) {
      next(err);
    }
};

exports.getAssets = async (req, res, next) => {
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
      
        const assets = await Asset.find({date: {'$gte': start_date, '$lte': end_date}}).populate('user');

        res.status(200).json({ assets });
    } catch (err) {
      next(err);
    }
};

exports.getAssetById = async (req, res, next) => {
    const _id = req.params.id;
  
    try {
        const asset = await Asset.findById(_id).populate('user');

        res.status(200).json({ asset });
    } catch (err) {
      next(err);
    }
};

exports.updateAsset = async (req, res, next) => {
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
        await Asset.updateOne({ _id }, { name, amount, date});
        const asset = await Asset.findById(_id).populate('user');
    
        res.status(200).json({ asset });
    } catch (err) {
      next(err);
    }
};

exports.deleteAsset = async (req, res, next) => {
    const _id = req.params.id;
    try {
        await Asset.deleteOne({ _id });

        res.status(200).json({ 'message': "Asset Deleted Successfully." });
    } catch (err) {
      next(err);
    }
};