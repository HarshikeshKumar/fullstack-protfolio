import { useEffect, useState } from "react";
import api from "../api/api";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await api.get("/projects");
      setProjects(res.data);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden"
    >
      {/* animated background glow */}
      <div className="absolute w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-purple-500/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* heading */}
        <h2 className="text-4xl font-bold text-center mb-4 animate-fadeIn">
          My Projects
        </h2>

        <p className="text-center text-gray-400 mb-14 animate-fadeIn">
          Some projects I built using modern web technologies
        </p>

        {/* projects grid */}
        {loading ? (
          <div className="text-center text-gray-400">Loading projects...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((p, index) => (
              <div
                key={p._id}
                className="transform transition duration-500 hover:scale-105 hover:-translate-y-3"
                style={{
                  animation: `fadeUp 0.6s ease forwards`,
                  animationDelay: `${index * 0.2}s`,
                  opacity: 0,
                }}
              >
                <ProjectCard project={p} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* custom animation */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              transform: translateY(40px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          .animate-fadeIn {
            animation: fadeIn 1s ease forwards;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
}
