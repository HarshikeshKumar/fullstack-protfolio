export default function SkillCard({ skill }) {
  return (
    <div className="bg-slate-800 p-6 rounded-xl text-center shadow hover:scale-105 transition">
      <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>

      <div className="w-full bg-slate-700 h-3 rounded">
        <div
          className="bg-blue-500 h-3 rounded"
          style={{ width: `${skill.level}%` }}
        />
      </div>

      <p className="text-gray-400 mt-2">{skill.level}%</p>
    </div>
  );
}
