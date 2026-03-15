export default function ProjectCard({ project }) {
  return (
    <div className="bg-slate-800 p-4 rounded-xl hover:scale-105 transition">
      <img src={project.image} className="rounded-lg" />

      <h2 className="text-xl mt-3 font-bold">{project.title}</h2>

      <p className="text-gray-400">{project.description}</p>

      <div className="flex gap-4 mt-3">
        <a href={project.github} className="text-blue-400">
          Github
        </a>

        <a href={project.live} className="text-green-400">
          Live
        </a>
      </div>
    </div>
  );
}
