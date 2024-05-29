import express from "express";
import Egg from "../models/egg.js"; // Importa il modello Egg

const router = express.Router();

export const getAllEggs = async (req, res) => {
	try {
		const eggs = await Egg.find();
		res.status(200).json(eggs);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const getEggById = async (req, res) => {
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).json({
			message: "ID non valido",
		});
	try {
		const egg = await Egg.findById(id);
		res.status(200).json(egg);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const insertEgg = async (req, res) => {
	const egg = new Egg(req.body);

	try {
		await egg.save();

		res.status(201).json(egg);
	} catch (error) {
		res.status(409).json({
			message: error.message,
		});
	}
};

export const deleteEgg = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).json({
			message: "ID non valido",
		});

	try {
		await Egg.findByIdAndDelete(id);
		res.json({ message: "Uovo eliminato con successo" });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const updateEgg = async (req, res) => {
	const { id } = req.params;
	const data = { ...req.body };

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).json({
			message: "ID non valido",
		});

	try {
		const egg = await Egg.findByIdAndUpdate(id, data, { new: true });
		res.status(200).json(egg);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export default router;
