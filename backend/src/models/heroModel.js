import mongoose from "mongoose";

const heroSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      default: "Hi, I'm Harshikesh Kumar",
    },
    subheading: {
      type: String,
      default: "I build modern, responsive and scalable web applications.",
    },
    description: {
      type: String,
      default:
        "I am a passionate Full Stack Developer with strong interest in MERN stack development. I enjoy creating clean user interfaces, powerful backend systems and real-world web applications. I have worked on projects like Mentor Hub and Food Delivery Web Application, and I am always excited to learn new technologies and improve my development skills.",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Hero", heroSchema);
