import express from "express";
import {
  getHeroContent,
  updateHeroContent,
} from "../controllers/heroController.js";

const router = express.Router();

router.get("/hero", getHeroContent);
router.put("/hero", updateHeroContent);

export default router;
