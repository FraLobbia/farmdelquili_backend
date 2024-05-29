import mongoose from "mongoose";

// Schema per le galline
const henSchema = new mongoose.Schema({
	race: { type: String, required: true }, // Razza della gallina
	quantity: { type: Number, required: true }, // Quantità di galline
	eggColor: { type: String, required: true }, // Colore dell'uovo
});

const Hen = mongoose.model("Hen", henSchema);

export default Hen;
