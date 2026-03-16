export default function ProjectCard({ project }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-cyan-400/30 hover:shadow-cyan-500/10">
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={project.image}
          alt={project.title}
          className="h-56 w-full rounded-2xl object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent opacity-70"></div>
      </div>

      <div className="mt-5">
        <h2 className="text-xl font-bold text-white sm:text-2xl">
          {project.title}
        </h2>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-300 sm:text-base">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition duration-300 hover:scale-105 hover:bg-cyan-400/20"
            >
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm font-medium text-green-300 transition duration-300 hover:scale-105 hover:bg-green-400/20"
            >
              Live Preview
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
