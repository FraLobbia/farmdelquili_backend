import mongoose from "mongoose";

// Schema per gli ordini
const orderSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		}, // Riferimento al documento utente che ha effettuato l'ordine
		collectionDate: { type: Date, required: true }, // Data di raccolta dell'ordine
	},
	{ timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

// Schema per i dettagli degli ordini
const orderItemSchema = new mongoose.Schema({
	orderId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Order",
		required: true,
	}, // Riferimento all'ordine
	eggId: { type: mongoose.Schema.Types.ObjectId, ref: "Egg", required: true }, // Riferimento all'uovo nell'ordine
	quantity: { type: Number, required: true }, // Quantità dell'uovo nell'ordine
});

const OrderItem = mongoose.model("OrderItem", orderItemSchema);

module.exports = { Order, OrderItem };
