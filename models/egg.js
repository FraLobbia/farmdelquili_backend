import mongoose from "mongoose";

// Schema per le uova
const eggSchema = new mongoose.Schema({
	henId: { type: mongoose.Schema.Types.ObjectId, ref: "Hen", required: true }, // Riferimento alla gallina che ha deposto l'uovo
	quantity: { type: Number, required: true }, // Quantità di uova
	layingDate: { type: Date, required: true }, // Data di deposizione dell'uovo
});

const Egg = mongoose.model("Egg", eggSchema);

export default Egg;
