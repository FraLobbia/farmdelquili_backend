import express from "express";
import {
	getAllHens,
	getHenById,
	insertHen,
	deleteHen,
	updateHen,
} from "../controllers/hensController.js";
const router = express.Router();

router.get("/", getAllHens);
router.get("/:id", getHenById);
router.post("/", insertHen);
router.delete("/:id", deleteHen);
router.patch("/:id", updateHen);

export default router;
