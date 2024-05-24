import express from "express";
import {
	getAllUsers,
	getUserById,
	insertUser,
	deleteUser,
	updateUser,
} from "../controllers/users.js";

const router = express.Router();

let users = [];

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", insertUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

export default router;
