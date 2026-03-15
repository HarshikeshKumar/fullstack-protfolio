import { useEffect, useState } from "react";
import api from "../api/api";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "./Projects";
import ContactForm from "../components/ContactForm";
import SkillCard from "../components/SkillCard";
import Footer from "../components/Footer";
import Education from "../components/Education";

export default function Home() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const res = await api.get("/skills");
      setSkills(res.data);
    };

    fetchSkills();
  }, []);

  return (
    <div>
      <Navbar />

      <Hero />

      {/* Skills */}

      <section className="py-20 bg-slate-900 text-white">
        <h2 className="text-3xl text-center mb-10">My Skills</h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill) => (
            <SkillCard key={skill._id} skill={skill} />
          ))}
        </div>
      </section>

      <Education />

      <Projects />

      <section id="contact" className="py-20">
        <h2 className="text-center text-3xl mb-10">Contact Me</h2>

        <ContactForm />
        <Footer />
      </section>
    </div>
  );
}
