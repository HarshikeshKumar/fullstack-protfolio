import Certificate from "../models/Certificate.js";
import cloudinary from "../config/cloudinary.js";

export const getCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find().sort({ createdAt: -1 });
    res.json(certificates);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to fetch certificates" });
  }
};

export const addCertificate = async (req, res) => {
  try {
    const { title, issuer } = req.body;

    const image = req.file ? req.file.path : "";
    const public_id = req.file ? req.file.filename : "";

    const certificate = new Certificate({
      title,
      issuer,
      image,
      public_id,
    });

    await certificate.save();

    res.status(201).json(certificate);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Certificate add failed" });
  }
};

export const deleteCertificate = async (req, res) => {
  try {
    const certificate = await Certificate.findById(req.params.id);

    if (!certificate) {
      return res.status(404).json({ message: "Certificate not found" });
    }

    if (certificate.public_id) {
      await cloudinary.uploader.destroy(certificate.public_id);
    }

    await Certificate.findByIdAndDelete(req.params.id);

    res.json({ message: "Certificate deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Certificate delete failed" });
  }
};
