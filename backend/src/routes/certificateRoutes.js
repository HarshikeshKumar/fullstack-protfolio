import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

import {
  getCertificates,
  addCertificate,
  deleteCertificate,
} from "../controllers/certificateController.js";

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "portfolio-certificates",
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
  },
});

const upload = multer({ storage });

router.get("/", getCertificates);
router.post("/", upload.single("image"), addCertificate);
router.delete("/:id", deleteCertificate);

export default router;
