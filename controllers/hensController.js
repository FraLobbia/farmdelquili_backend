import express from "express";
import Hen from "../models/hen.js"; // Importa il modello Hen

const router = express.Router();

export const getAllHens = async (req, res) => {
	try {
		const hens = await Hen.find();
		res.status(200).json(hens);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const getHenById = async (req, res) => {
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).json({
			message: "ID non valido",
		});
	try {
		const hen = await Hen.findById(id);
		res.status(200).json(hen);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const insertHen = async (req, res) => {
	const hen = new Hen(req.body);

	try {
		await hen.save();

		res.status(201).json(hen);
	} catch (error) {
		res.status(409).json({
			message: error.message,
		});
	}
};

export const deleteHen = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).json({
			message: "ID non valido",
		});

	try {
		await Hen.findByIdAndDelete(id);
		res.json({ message: "Gallina eliminata con successo" });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const updateHen = async (req, res) => {
	const { id } = req.params;
	const data = { ...req.body };

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).json({
			message: "ID non valido",
		});

	try {
		const hen = await Hen.findByIdAndUpdate(id, data, { new: true });
		res.status(200).json(hen);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export default router;
