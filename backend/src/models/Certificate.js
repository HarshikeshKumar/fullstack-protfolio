import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema(
  {
    title: String,
    issuer: String,
    image: String,
    public_id: String,
  },
  { timestamps: true },
);

export default mongoose.model("Certificate", certificateSchema);
