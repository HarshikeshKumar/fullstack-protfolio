// import express from "express";
// import {
//   getProjects,
//   addProject,
//   updateProject,
//   deleteProject,
// } from "../controllers/projectController.js";

// const router = express.Router();

// router.get("/", getProjects);
// router.post("/", addProject);
// router.put("/:id", updateProject);
// router.delete("/:id", deleteProject);

// export default router;

import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

import {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "portfolio-projects",
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
  },
});

const upload = multer({ storage });

router.get("/", getProjects);

router.post("/", upload.single("image"), addProject);

router.put("/:id", updateProject);

router.delete("/:id", deleteProject);

export default router;
