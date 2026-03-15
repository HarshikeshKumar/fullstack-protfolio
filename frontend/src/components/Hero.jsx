import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import api from "../api/api";

export default function Hero() {
  const [photo, setPhoto] = useState("");

  const fetchPhoto = async () => {
    try {
      const res = await api.get("/profile-photo");

      if (res.data.photo) {
        setPhoto(res.data.photo); // Cloudinary URL direct
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPhoto();
  }, []);

  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-slate-900 text-white"
    >
      {photo && (
        <motion.img
          src={photo}
          alt="profile"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-cyan-400 shadow-lg"
        />
      )}

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold"
      >
        Hi I'm Harshikesh 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-lg text-gray-400"
      >
        Full Stack Developer (MERN)
      </motion.p>
    </section>
  );
}
