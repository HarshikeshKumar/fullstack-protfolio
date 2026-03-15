import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
  degree: String,
  college: String,
  year: String,
  description: String,
});

export default mongoose.model("Education", educationSchema);
