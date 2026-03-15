import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    photo: {
      type: String,
      default: "",
    },
    public_id: {
      type: String,
      default: "",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Profile", profileSchema);
