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
        Hi I'm Harshikesh kumar 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-lg text-gray-400"
      >
        My name is Harshikesh Kumar, and I am a passionate Full Stack Developer
        with a strong interest in building modern and scalable web applications.
        I belong to Bihar and currently live in Noida Sector 62. I completed my
        BCA from M.P. Sinha Science College, Bihar and later pursued my MCA from
        K.R. Mangalam University, Gurugram. Along with my academic studies, I
        also completed a Full Stack Development course from Physics Wallah (PW)
        to strengthen my practical development skills. I mainly work with the
        MERN stack, using technologies like React, Node.js, Express, Tailwind
        CSS, and Bootstrap to build responsive and efficient web applications.
        My key projects include Mentor Hub and a Food Delivery Web Application,
        where I worked on both frontend and backend development. I enjoy solving
        problems through code and continuously learning new technologies to
        improve my skills as a developer.
      </motion.p>
    </section>
  );
}
