import express from "express";
import { v4 as uuidv4 } from "uuid";
import { User } from "../models/user.js";
import mongoose from "mongoose";

const router = express.Router();

export const getAllUsers = async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const getUserById = async (req, res) => {
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).json({
			message: "id non conforme con mongo",
		});
	try {
		const user = await User.findById(id);
		res.status(200).json(user);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const insertUser = async (req, res) => {
	const user = new User(req.body);

	try {
		await user.save();

		res.status(201).json(user);
	} catch (error) {
		res.status(409).json({
			message: error.message,
		});
	}
};

export const deleteUser = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).json({
			message: "id non conforme con mongo",
		});

	try {
		await User.findByIdAndDelete(id);
		res.json({ message: "Utente eliminato con successo" });
	} catch (error) {}
};

export const updateUser = async (req, res) => {
	const { id } = req.params;
	const data = { ...req.body };

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).json({
			message: "id non conforme con mongo",
		});

	try {
		const user = await User.findByIdAndUpdate(id, data, { new: true });
		res.status(200).json(user);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export default router;
