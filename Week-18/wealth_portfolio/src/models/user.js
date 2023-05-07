const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			minlength: 6
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			lowercase: true,
		},
		password: {
			type: String,
			required: true,
			minlength: 6,
			select: false
		},
	},
	{ timestamps: true }
);

userSchema.pre('save', async function (next) {
	if (this.isModified('password')) {
		try {
			const hashedPassword = await bcrypt.hash(this.password, 10);
			this.password = hashedPassword;
			next();
		} catch (err) {
			next(err);
		}
	} else {
		next();
	}
});

const User = mongoose.model('users', userSchema);

module.exports = User;
