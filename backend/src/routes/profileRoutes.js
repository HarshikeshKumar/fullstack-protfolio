import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";
import {
  uploadPhoto,
  deletePhoto,
  getPhoto,
} from "../controllers/profileController.js";

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => ({
    folder: "portfolio-profile",
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
  }),
});

const upload = multer({ storage });

router.post("/profile-photo", upload.single("photo"), uploadPhoto);
router.get("/profile-photo", getPhoto);
router.delete("/profile-photo", deletePhoto);

export default router;
