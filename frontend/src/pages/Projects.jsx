import { useEffect, useState } from "react";
import api from "../api/api";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/projects").then((res) => setProjects(res.data));
  }, []);

  return (
    <section id="projects" className="py-20 px-10">
      <h2 className="text-3xl text-center mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <ProjectCard key={p._id} project={p} />
        ))}
      </div>
    </section>
  );
}
