import express from "express";
import {
	getAllUsers,
	getUserById,
	insertUser,
	deleteUser,
	updateUser,
} from "../controllers/usersController.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", insertUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

export default router;
