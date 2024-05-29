import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import usersRoutes from "./routes/user.js";
import eggRoutes from "./routes/egg.js";
import henRoutes from "./routes/hen.js";
import authRoutes from "./routes/auth.js";
import { authenticateToken } from "./middlewares/auth.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);
app.use("/user", authenticateToken, usersRoutes);
app.use("/egg", eggRoutes);
app.use("/hen", henRoutes);

app.get("/", (req, res) => res.send("Hello World"));

mongoose
	.connect(process.env.CONNECTION_URL)
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	})
	.catch((error) => console.error(error));
