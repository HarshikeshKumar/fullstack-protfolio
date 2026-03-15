import express from "express";
import {
  getSkills,
  addSkill,
  deleteSkill,
  updateSkill,
} from "../controllers/skillController.js";

const router = express.Router();

router.get("/", getSkills);
router.post("/", addSkill);
router.delete("/:id", deleteSkill);
router.put("/:id", updateSkill);

export default router;
