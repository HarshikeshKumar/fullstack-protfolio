import { useEffect, useState } from "react";
import api from "../api/api";

const Education = () => {
  const [education, setEducation] = useState([]);

  const fetchEducation = async () => {
    try {
      const res = await api.get("/education");
      setEducation(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEducation();
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* heading */}
        <div className="text-center mb-16 animate-fadeUp">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-cyan-300 border border-cyan-400/30 rounded-full bg-cyan-400/10 backdrop-blur-md">
            My Journey
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Education
          </h2>

          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            My academic journey and the institutions that helped shape my
            technical knowledge and growth.
          </p>
        </div>

        {/* timeline */}
        <div className="relative border-l border-white/10 pl-8 space-y-10">
          {education.map((edu, index) => (
            <div
              key={edu._id}
              className="relative group"
              style={{
                animation: `fadeUp 0.7s ease forwards`,
                animationDelay: `${index * 0.15}s`,
                opacity: 0,
              }}
            >
              {/* timeline dot */}
              <div className="absolute -left-[10px] top-3 w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-500/40"></div>

              {/* card */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-cyan-500/10">
                <h3 className="text-xl font-semibold text-cyan-400">
                  {edu.degree}
                </h3>

                <p className="text-slate-300 mt-1">{edu.college}</p>

                <p className="text-sm text-slate-400">{edu.year}</p>

                {edu.description && (
                  <p className="text-slate-400 mt-3 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(35px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeUp {
            animation: fadeUp 0.8s ease forwards;
          }
        `}
      </style>
    </section>
  );
};

export default Education;
