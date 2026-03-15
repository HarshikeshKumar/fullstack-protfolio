import express from "express";
import {
  getEducation,
  addEducation,
  deleteEducation,
  updateEducation,
} from "../controllers/educationController.js";

const router = express.Router();

router.get("/", getEducation);
router.post("/", addEducation);
router.delete("/:id", deleteEducation);
router.put("/:id", updateEducation);

export default router;
