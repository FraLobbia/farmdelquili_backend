import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	role: { type: String, enum: ["admin", "user"], default: "user" }, // Ruolo dell'utente (admin o user)
});

const User = mongoose.model("User", userSchema);

export default User;
