import Profile from "../models/Profile.js";
import cloudinary from "../config/cloudinary.js";

export const uploadPhoto = async (req, res) => {
  try {
    console.log("REQ FILE:", req.file);

    if (!req.file) {
      return res.status(400).json({ message: "No photo uploaded" });
    }

    let profile = await Profile.findOne();

    const photoUrl = req.file.path;
    const publicId = req.file.filename || req.file.public_id;

    if (!profile) {
      profile = new Profile({
        photo: photoUrl,
        public_id: publicId,
      });
    } else {
      if (profile.public_id) {
        await cloudinary.uploader.destroy(profile.public_id);
      }

      profile.photo = photoUrl;
      profile.public_id = publicId;
    }

    await profile.save();

    res.status(200).json({
      message: "Photo uploaded successfully",
      photo: profile.photo,
    });
  } catch (error) {
    console.log("UPLOAD PHOTO ERROR:", error);
    res.status(500).json({
      message: "Photo upload failed",
      error: error.message,
    });
  }
};

export const getPhoto = async (req, res) => {
  try {
    const profile = await Profile.findOne();

    if (!profile) {
      return res.json({ photo: "" });
    }

    res.json({ photo: profile.photo });
  } catch (error) {
    console.log("GET PHOTO ERROR:", error);
    res.status(500).json({ message: "Failed to fetch photo" });
  }
};

export const deletePhoto = async (req, res) => {
  try {
    const profile = await Profile.findOne();

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    if (profile.public_id) {
      await cloudinary.uploader.destroy(profile.public_id);
    }

    profile.photo = "";
    profile.public_id = "";

    await profile.save();

    res.json({ message: "Photo removed successfully" });
  } catch (error) {
    console.log("DELETE PHOTO ERROR:", error);
    res.status(500).json({ message: "Photo delete failed" });
  }
};
