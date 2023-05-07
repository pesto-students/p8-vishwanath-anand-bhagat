const express = require('express');
require('dotenv').config();

const connectDB = require('../config/database');

const authRoutes = require('./routes/auth');
const assetRoutes = require('./routes/assets');
const equityRoutes = require('./routes/equities');
const fixedIncomeRoutes = require('./routes/fixed_income');
const fundRoutes = require('./routes/funds');
const invoiceRoutes = require('./routes/invoices');

const app = express();
app.use(express.json());

connectDB();

// Route definitions
app.use('/auth', authRoutes);
app.use('/asset', assetRoutes);
app.use('/equity', equityRoutes);
app.use('/fixed_income', fixedIncomeRoutes);
app.use('/fund', fundRoutes);
app.use('/invoice', invoiceRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
