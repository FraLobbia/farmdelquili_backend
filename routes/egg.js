import express from "express";
import {
	getAllEggs,
	getEggById,
	insertEgg,
	deleteEgg,
	updateEgg,
} from "../controllers/eggsController.js";

const router = express.Router();

router.get("/", getAllEggs);
router.get("/:id", getEggById);
router.post("/", insertEgg);
router.delete("/:id", deleteEgg);
router.patch("/:id", updateEgg);

export default router;
