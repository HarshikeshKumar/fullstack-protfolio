import { useEffect, useState } from "react";
import api from "../api/api";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "./Projects";
import ContactForm from "../components/ContactForm";
import SkillCard from "../components/SkillCard";
import Footer from "../components/Footer";
import Education from "../components/Education";
import Certificates from "../components/Certificates";

export default function Home() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await api.get("/skills");
        setSkills(res.data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-100px] top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute right-[-100px] top-40 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl animate-pulse"></div>
      </div>

      <Navbar />

      <div className="animate-fadeIn">
        <Hero />
      </div>

      {/* Skills Section */}
      <section className="relative px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center animate-fadeUp">
            <span className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300 backdrop-blur-md">
              My Expertise
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              My Skills
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
              Technologies and tools that I use to build modern, responsive and
              user-friendly web applications.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl sm:p-8">
            {loading ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {[...Array(8)].map((_, index) => (
                  <div
                    key={index}
                    className="h-32 animate-pulse rounded-2xl border border-white/10 bg-white/5"
                  ></div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill._id}
                    className="transition duration-500 hover:scale-105 hover:-translate-y-2"
                    style={{
                      animation: `fadeUp 0.6s ease forwards`,
                      animationDelay: `${index * 0.15}s`,
                      opacity: 0,
                    }}
                  >
                    <SkillCard skill={skill} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="animate-fadeUp">
        <Education />
      </div>

      <div className="animate-fadeUp">
        <Projects />
      </div>

      <div className="animate-fadeUp">
        <Certificates />
      </div>

      <section className="py-24 px-6 sm:px-10 animate-fadeUp">
        <div className="max-w-5xl mx-auto">
          <ContactForm />
        </div>
      </section>

      <div className="animate-fadeUp">
        <Footer />
      </div>

      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .animate-fadeUp {
            animation: fadeUp 1s ease forwards;
          }

          .animate-fadeIn {
            animation: fadeIn 1s ease forwards;
          }
        `}
      </style>
    </div>
  );
}
