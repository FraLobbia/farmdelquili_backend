import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const login = async (req, res) => {
	const { username, password } = req.body;
	const user = await User.findOne({ username });

	if (!user) {
		res.status(404).json({
			status: "error",
			message: "Utente o password errata",
		});
	}

	if (await bcrypt.compare(password, user.password)) {
		const token = jwt.sign(
			{
				id: user._id,
				username: user.username,
			},
			process.env.JWT_SECRET,
			{ expiresIn: "1h" }
		);
		res.status(200).json({ status: "ok", data: token });
	} else {
		res.status(401).json({
			status: "error",
			message: "Utente o password errata",
		});
	}
};

export const register = async (req, res) => {
	const { username, password } = req.body; // add confirmPassword field

	if (!username || !password) {
		res.status(400).json({ message: "Compila tutti i campi" });
	}

	if (password.length < 6) {
		res.status(400).json({
			message: "La password deve essere di almeno 6 caratteri",
		});
	}

	if (typeof username !== "string") {
		res.status(400).json({ message: "Username non valido" });
	}

	const hashedPassword = await bcrypt.hash(password, 12);
	const user = new User({ username, password: hashedPassword });
	try {
		await user.save();
		res.status(201).json({ status: "ok" });
	} catch (error) {
		res.status(409).json({ status: "error", message: error.message });
	}
};
