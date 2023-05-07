const mongoose = require('mongoose');
const moment = require('moment');
const User = require('./user');

const equitySchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
    },
    date: {
      type: Date,
      required: true,
      validate: {
        validator: function(value) {
          return moment(value, 'YYYY-MM-DD', true).isValid();
        },
        message: 'Date must be in ISO 8601 format (YYYY-MM-DD)',
      },
    },
    amount: {
      type: Number,
      required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true,
    },
  },
  { timestamps: true }
);

equitySchema.set('populate', { path: User, select: 'name email' });

const Equity = mongoose.model('equities', equitySchema);

module.exports = Equity;
