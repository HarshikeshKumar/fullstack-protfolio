import { useEffect, useState } from "react";
import api from "../api/api";

const Education = () => {
  const [education, setEducation] = useState([]);

  const fetchEducation = async () => {
    const res = await api.get("/education");
    setEducation(res.data);
  };

  useEffect(() => {
    fetchEducation();
  }, []);

  return (
    <section className="py-20 bg-slate-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Education</h2>

      <div className="max-w-4xl mx-auto space-y-6 px-6">
        {education.map((edu) => (
          <div
            key={edu._id}
            className="bg-slate-800 p-6 rounded-xl shadow-md hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold text-blue-400">
              {edu.degree}
            </h3>

            <p className="text-gray-300 mt-1">{edu.college}</p>

            <p className="text-gray-400 text-sm">{edu.year}</p>

            {edu.description && (
              <p className="text-gray-400 mt-2">{edu.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
