// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import api from "../api/api";

// export default function Hero() {
//   const [photo, setPhoto] = useState("");

//   const fetchPhoto = async () => {
//     try {
//       const res = await api.get("/profile-photo");

//       if (res.data.photo) {
//         setPhoto(res.data.photo);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchPhoto();
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 35 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen overflow-hidden bg-slate-950 px-6 pt-28 text-white sm:px-10 lg:px-20"
//     >
//       {/* animated background */}
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute left-[-80px] top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl animate-pulse"></div>
//         <div className="absolute right-[-80px] top-32 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl animate-pulse"></div>
//       </div>

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 lg:flex-row"
//       >
//         {/* left content */}
//         <div className="max-w-3xl text-center lg:text-left">
//           <motion.span
//             variants={itemVariants}
//             className="mb-5 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300 backdrop-blur-md"
//           >
//             Full Stack Developer
//           </motion.span>

//           <motion.h1
//             variants={itemVariants}
//             className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl"
//           >
//             Hi, I'm{" "}
//             <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Harshikesh Kumar
//             </span>{" "}
//             👋
//           </motion.h1>

//           <motion.h2
//             variants={itemVariants}
//             className="mt-4 text-lg font-medium text-slate-300 sm:text-xl md:text-2xl"
//           >
//             I build modern, responsive and scalable web applications.
//           </motion.h2>

//           <motion.p
//             variants={itemVariants}
//             className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base lg:mx-0"
//           >
//             I am a passionate Full Stack Developer with strong interest in MERN
//             stack development. I enjoy creating clean user interfaces, powerful
//             backend systems and real-world web applications. I have worked on
//             projects like Mentor Hub and Food Delivery Web Application, and I am
//             always excited to learn new technologies and improve my development
//             skills.
//           </motion.p>

//           <motion.div
//             variants={itemVariants}
//             className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
//           >
//             <a
//               href="#projects"
//               className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-cyan-500/30"
//             >
//               View Projects
//             </a>

//             <a
//               href="#contact"
//               className="rounded-full border border-white/15 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur-md transition duration-300 hover:scale-105 hover:border-cyan-400/40 hover:text-cyan-300"
//             >
//               Contact Me
//             </a>
//           </motion.div>
//         </div>

//         {/* right image */}
//         <motion.div
//           variants={itemVariants}
//           className="relative flex justify-center"
//         >
//           <div className="absolute h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl sm:h-80 sm:w-80 md:h-[420px] md:w-[420px]"></div>

//           {photo ? (
//             <motion.img
//               src={photo}
//               alt="profile"
//               animate={{ y: [0, -12, 0] }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="relative h-64 w-64 rounded-full border-4 border-cyan-400/40 object-cover shadow-2xl shadow-cyan-500/20 sm:h-80 sm:w-80 md:h-[380px] md:w-[380px]"
//             />
//           ) : (
//             <motion.div
//               animate={{ y: [0, -12, 0] }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="relative flex h-64 w-64 items-center justify-center rounded-full border-4 border-cyan-400/40 bg-slate-800 text-4xl font-bold text-cyan-300 shadow-2xl shadow-cyan-500/20 sm:h-80 sm:w-80 md:h-[380px] md:w-[380px]"
//             >
//               HK
//             </motion.div>
//           )}
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import api from "../api/api";

export default function Hero() {
  const [photo, setPhoto] = useState("");
  const [heroContent, setHeroContent] = useState({
    heading: "",
    subheading: "",
    description: "",
  });

  const fetchPhoto = async () => {
    try {
      const res = await api.get("/profile-photo");

      if (res.data.photo) {
        setPhoto(res.data.photo);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchHeroContent = async () => {
    try {
      const res = await api.get("/hero");
      setHeroContent({
        heading: res.data.heading,
        subheading: res.data.subheading,
        description: res.data.description,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPhoto();
    fetchHeroContent();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 px-6 pt-28 text-white sm:px-10 lg:px-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-80px] top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute right-[-80px] top-32 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl animate-pulse"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 lg:flex-row"
      >
        <div className="max-w-3xl text-center lg:text-left">
          <motion.span
            variants={itemVariants}
            className="mb-5 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300 backdrop-blur-md"
          >
            Full Stack Developer
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              {heroContent.heading}
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="mt-4 text-lg font-medium text-slate-300 sm:text-xl md:text-2xl"
          >
            {heroContent.subheading}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base lg:mx-0"
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
          >
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-cyan-500/30"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur-md transition duration-300 hover:scale-105 hover:border-cyan-400/40 hover:text-cyan-300"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="relative flex justify-center"
        >
          <div className="absolute h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl sm:h-80 sm:w-80 md:h-[420px] md:w-[420px]"></div>

          {photo ? (
            <motion.img
              src={photo}
              alt="profile"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative h-64 w-64 rounded-full border-4 border-cyan-400/40 object-cover shadow-2xl shadow-cyan-500/20 sm:h-80 sm:w-80 md:h-[380px] md:w-[380px]"
            />
          ) : (
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex h-64 w-64 items-center justify-center rounded-full border-4 border-cyan-400/40 bg-slate-800 text-4xl font-bold text-cyan-300 shadow-2xl shadow-cyan-500/20 sm:h-80 sm:w-80 md:h-[380px] md:w-[380px]"
            >
              HK
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
