const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");

exports.login = async (req, res, next) => {
	const { email, password } = req.body;

	if (!email || !password) {
		let errors = {};
		if (!email) {
			errors.email = "Email is required.";
		}
		if (!password) {
			errors.password = "Password is required.";
		}
		res.status(400).json({ errors });
	}

	try {
		const user = await User.findOne({ email });

		if (!user) {
			return res.status(401).json({ message: "Invalid email or password" });
		}

		const isPasswordValid = await bcrypt.compare(password, user.password);

		if (!isPasswordValid) {
			return res.status(401).json({ message: "Invalid email or password" });
		}

		const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

		res.status(200).json({ token });
	} catch (err) {
			next(err);
	}
};

exports.register = async (req, res, next) => {
	const { email, password, name } = req.body;

	if (
		!email ||
		!password ||
		!name ||
		email.length < 6 ||
		password.length < 6 ||
		name.length < 6
	) {
		let errors = {};
		if (!email) {
			errors.email = "Email is required.";
		} else if (email.length < 6) {
			errors.email = "Email should be of min 6 characters.";
		}
		if (!password) {
			errors.password = "Password is required.";
		} else if (password.length < 6) {
			errors.password = "Password should be of min 6 characters.";
		}
		if (!name) {
			errors.name = "Name is required.";
		} else if (name.length < 6) {
			errors.name = "Name should be of min 6 characters.";
		}
		res.status(400).json({ errors });
	}

	try {
		const existingUser = await User.findOne({ email });

		if (existingUser) {
			return res.status(409).json({ message: "Email already in use" });
		}

		const newUser = new User({ email, password, name });

		await newUser.save();

		const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);

		res.status(201).json({ token });
	} catch (err) {
		next(err);
	}
};
