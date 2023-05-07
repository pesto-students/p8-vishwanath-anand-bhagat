const mongoose = require('mongoose');
const moment = require('moment');
const validator = require('validator');
const querystring = require('querystring');

const User = require('./user');

const invoiceSchema = new mongoose.Schema(
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
    file: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

invoiceSchema.set('populate', { path: User, select: 'name email' });

const Invoice = mongoose.model('invoices', invoiceSchema);

module.exports = Invoice;
