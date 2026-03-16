import { useState, useEffect } from "react";
import api from "../api/api";

const Admin = () => {
  const [certificates, setCertificates] = useState([]);

  const [certificateTitle, setCertificateTitle] = useState("");
  const [certificateIssuer, setCertificateIssuer] = useState("");
  const [certificateImage, setCertificateImage] = useState(null);
  const [certificatePreview, setCertificatePreview] = useState("");

  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);

  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  const [github, setGithub] = useState("");
  const [live, setLive] = useState("");

  const [skillName, setSkillName] = useState("");
  const [skillLevel, setSkillLevel] = useState("");

  const [degree, setDegree] = useState("");
  const [college, setCollege] = useState("");
  const [year, setYear] = useState("");
  const [eduDescription, setEduDescription] = useState("");

  const [editId, setEditId] = useState(null);
  const [editEduId, setEditEduId] = useState(null);

  const token = localStorage.getItem("token");

  const fetchCertificates = async () => {
    try {
      const res = await api.get("/certificates");
      setCertificates(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProjects = async () => {
    try {
      const res = await api.get("/projects");
      setProjects(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSkills = async () => {
    try {
      const res = await api.get("/skills");
      setSkills(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchEducation = async () => {
    try {
      const res = await api.get("/education");
      setEducation(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProfilePhoto = async () => {
    try {
      const res = await api.get("/profile-photo");
      if (res.data.photo) {
        setPreview(res.data.photo);
      } else {
        setPreview("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
    fetchSkills();
    fetchEducation();
    fetchProfilePhoto();
    fetchCertificates();
  }, []);

  const handleCertificateImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setCertificateImage(file);
    setCertificatePreview(URL.createObjectURL(file));
  };

  const handleAddCertificate = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", certificateTitle);
      formData.append("issuer", certificateIssuer);
      formData.append("image", certificateImage);

      await api.post("/certificates", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setCertificateTitle("");
      setCertificateIssuer("");
      setCertificateImage(null);
      setCertificatePreview("");

      fetchCertificates();
      alert("Certificate added");
    } catch (error) {
      console.log(error);
      alert("Certificate add failed");
    }
  };

  const handleDeleteCertificate = async (id) => {
    try {
      await api.delete(`/certificates/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      fetchCertificates();
      alert("Certificate deleted");
    } catch (error) {
      console.log(error);
      alert("Certificate delete failed");
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPhoto(file);
    setPreview(URL.createObjectURL(file));
  };

  const uploadPhoto = async () => {
    if (!photo) {
      alert("Select a photo");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("photo", photo);

      const res = await api.post("/profile-photo", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setPreview(res.data.photo);
      setPhoto(null);

      alert("Photo uploaded");
    } catch (error) {
      console.log(error);
      alert("Photo upload failed");
    }
  };

  const removePhoto = async () => {
    try {
      await api.delete("/profile-photo", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setPhoto(null);
      setPreview("");

      alert("Photo removed");
    } catch (error) {
      console.log(error);
      alert("Photo remove failed");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleAddProject = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);
      formData.append("image", image);
      formData.append("github", github);
      formData.append("live", live);

      await api.post("/projects", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setTitle("");
      setDescription("");
      setImage(null);
      setPreviewImage("");
      setGithub("");
      setLive("");

      fetchProjects();
      alert("Project added");
    } catch (error) {
      console.log(error);
      alert("Project add failed");
    }
  };

  const handleDeleteProject = async (id) => {
    try {
      await api.delete(`/projects/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      fetchProjects();
      alert("Project deleted");
    } catch (error) {
      console.log(error);
      alert("Project delete failed");
    }
  };

  const handleAddSkill = async (e) => {
    e.preventDefault();

    try {
      await api.post(
        "/skills",
        { name: skillName, level: skillLevel },
        { headers: { Authorization: `Bearer ${token}` } },
      );

      setSkillName("");
      setSkillLevel("");

      fetchSkills();
      alert("Skill added");
    } catch (error) {
      console.log(error);
      alert("Skill add failed");
    }
  };

  const handleDeleteSkill = async (id) => {
    try {
      await api.delete(`/skills/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      fetchSkills();
      alert("Skill deleted");
    } catch (error) {
      console.log(error);
      alert("Skill delete failed");
    }
  };

  const handleEditSkill = (skill) => {
    setSkillName(skill.name);
    setSkillLevel(skill.level);
    setEditId(skill._id);
  };

  const handleUpdateSkill = async (e) => {
    e.preventDefault();

    try {
      await api.put(
        `/skills/${editId}`,
        { name: skillName, level: skillLevel },
        { headers: { Authorization: `Bearer ${token}` } },
      );

      setSkillName("");
      setSkillLevel("");
      setEditId(null);

      fetchSkills();
      alert("Skill updated");
    } catch (error) {
      console.log(error);
      alert("Skill update failed");
    }
  };

  const handleAddEducation = async (e) => {
    e.preventDefault();

    try {
      await api.post(
        "/education",
        { degree, college, year, description: eduDescription },
        { headers: { Authorization: `Bearer ${token}` } },
      );

      setDegree("");
      setCollege("");
      setYear("");
      setEduDescription("");

      fetchEducation();
      alert("Education added");
    } catch (error) {
      console.log(error);
      alert("Education add failed");
    }
  };

  const handleDeleteEducation = async (id) => {
    try {
      await api.delete(`/education/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      fetchEducation();
      alert("Education deleted");
    } catch (error) {
      console.log(error);
      alert("Education delete failed");
    }
  };

  const handleEditEducation = (edu) => {
    setDegree(edu.degree);
    setCollege(edu.college);
    setYear(edu.year);
    setEduDescription(edu.description || "");
    setEditEduId(edu._id);
  };

  const handleUpdateEducation = async (e) => {
    e.preventDefault();

    try {
      await api.put(
        `/education/${editEduId}`,
        { degree, college, year, description: eduDescription },
        { headers: { Authorization: `Bearer ${token}` } },
      );

      setDegree("");
      setCollege("");
      setYear("");
      setEduDescription("");
      setEditEduId(null);

      fetchEducation();
      alert("Education updated");
    } catch (error) {
      console.log(error);
      alert("Education update failed");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-8">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-80px] top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute right-[-100px] top-40 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl animate-pulse"></div>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center animate-fadeUp">
          <span className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300 backdrop-blur-md">
            Admin Panel
          </span>
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Admin Dashboard
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
            Manage your portfolio content with a clean, modern and animated
            dashboard.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* PROFILE PHOTO */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl animate-fadeUp">
            <h2 className="mb-6 text-2xl font-semibold text-white">
              Profile Photo
            </h2>

            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="w-full rounded-xl border border-white/10 bg-slate-900/70 p-3 text-sm text-slate-300 file:mr-4 file:rounded-lg file:border-0 file:bg-cyan-500 file:px-4 file:py-2 file:text-white hover:file:bg-cyan-600"
            />

            {preview && (
              <div className="mt-6 flex justify-center">
                <img
                  src={preview}
                  alt="profile preview"
                  className="h-40 w-40 rounded-full object-cover border-4 border-cyan-400/30 shadow-lg transition duration-500 hover:scale-105"
                />
              </div>
            )}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={uploadPhoto}
                className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-medium text-white transition duration-300 hover:scale-105"
              >
                Upload Photo
              </button>

              <button
                onClick={removePhoto}
                className="rounded-xl bg-gradient-to-r from-red-500 to-pink-600 px-5 py-3 font-medium text-white transition duration-300 hover:scale-105"
              >
                Remove Photo
              </button>
            </div>
          </div>

          {/* ADD PROJECT */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl animate-fadeUp">
            <h2 className="mb-6 text-2xl font-semibold text-white">
              Add Project
            </h2>

            <form onSubmit={handleAddProject} className="space-y-4">
              <input
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 p-3 text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-cyan-400"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <textarea
                className="min-h-[120px] w-full rounded-xl border border-white/10 bg-slate-900/70 p-3 text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-cyan-400"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <input
                type="file"
                onChange={handleImageChange}
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 p-3 text-sm text-slate-300 file:mr-4 file:rounded-lg file:border-0 file:bg-purple-500 file:px-4 file:py-2 file:text-white hover:file:bg-purple-600"
              />

              {previewImage && (
                <img
                  src={previewImage}
                  alt="preview"
                  className="h-40 w-full rounded-2xl object-cover border border-white/10 transition duration-500 hover:scale-[1.02]"
                />
              )}

              <input
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 p-3 text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-cyan-400"
                placeholder="Github Link"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
              />

              <input
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 p-3 text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-cyan-400"
                placeholder="Live Link"
                value={live}
                onChange={(e) => setLive(e.target.value)}
              />

              <button className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-[1.02]">
                Add Project
              </button>
            </form>
          </div>

          {/* CERTIFICATES */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl animate-fadeUp lg:col-span-2">
            <h2 className="mb-6 text-2xl font-semibold text-white">
              Certificates
            </h2>

            <form
              onSubmit={handleAddCertificate}
              className="grid gap-4 md:grid-cols-2"
            >
              <input
                className="rounded-xl border border-white/10 bg-slate-900/70 p-3 text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-indigo-400"
                placeholder="Certificate Title"
                value={certificateTitle}
                onChange={(e) => setCertificateTitle(e.target.value)}
              />

              <input
                className="rounded-xl border border-white/10 bg-slate-900/70 p-3 text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-indigo-400"
                placeholder="Issuer Name"
                value={certificateIssuer}
                onChange={(e) => setCertificateIssuer(e.target.value)}
              />

              <div className="md:col-span-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleCertificateImageChange}
                  className="w-full rounded-xl border border-white/10 bg-slate-900/70 p-3 text-sm text-slate-300 file:mr-4 file:rounded-lg file:border-0 file:bg-indigo-500 file:px-4 file:py-2 file:text-white hover:file:bg-indigo-600"
                />
              </div>

              {certificatePreview && (
                <div className="md:col-span-2">
                  <img
                    src={certificatePreview}
                    alt="certificate preview"
                    className="h-48 w-full rounded-2xl border border-white/10 object-cover transition duration-500 hover:scale-[1.02]"
                  />
                </div>
              )}

              <div className="md:col-span-2">
                <button className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-[1.02]">
                  Add Certificate
                </button>
              </div>
            </form>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {certificates.map((item, index) => (
                <div
                  key={item._id}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    animation: `fadeUp 0.6s ease forwards`,
                    animationDelay: `${index * 0.08}s`,
                    opacity: 0,
                  }}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-20 w-24 rounded-xl border border-white/10 object-cover"
                      />

                      <div>
                        <p className="font-semibold text-white">{item.title}</p>
                        <p className="text-sm text-slate-300">{item.issuer}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleDeleteCertificate(item._id)}
                      className="rounded-xl bg-red-500 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:scale-105"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SKILLS */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl animate-fadeUp">
            <h2 className="mb-6 text-2xl font-semibold text-white">Skills</h2>

            <form
              onSubmit={editId ? handleUpdateSkill : handleAddSkill}
              className="mb-6 grid gap-4 sm:grid-cols-[1fr_140px_auto]"
            >
              <input
                className="rounded-xl border border-white/10 bg-slate-900/70 p-3 text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-green-400"
                placeholder="Skill Name"
                value={skillName}
                onChange={(e) => setSkillName(e.target.value)}
              />

              <input
                className="rounded-xl border border-white/10 bg-slate-900/70 p-3 text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-green-400"
                placeholder="Level %"
                value={skillLevel}
                onChange={(e) => setSkillLevel(e.target.value)}
              />

              <button className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-3 font-medium text-white transition duration-300 hover:scale-105">
                {editId ? "Update" : "Add"}
              </button>
            </form>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <div
                  key={skill._id}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white transition duration-300 hover:-translate-y-1"
                  style={{
                    animation: `fadeUp 0.6s ease forwards`,
                    animationDelay: `${index * 0.06}s`,
                    opacity: 0,
                  }}
                >
                  <span className="font-medium">
                    {skill.name} ({skill.level}%)
                  </span>

                  <button
                    onClick={() => handleEditSkill(skill)}
                    className="text-sm font-medium text-yellow-400 hover:text-yellow-300"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDeleteSkill(skill._id)}
                    className="text-sm font-medium text-red-400 hover:text-red-300"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* EDUCATION */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl animate-fadeUp">
            <h2 className="mb-6 text-2xl font-semibold text-white">
              Education
            </h2>

            <form
              onSubmit={editEduId ? handleUpdateEducation : handleAddEducation}
              className="space-y-4"
            >
              <input
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 p-3 text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-purple-400"
                placeholder="Degree"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
              />

              <input
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 p-3 text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-purple-400"
                placeholder="College"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
              />

              <input
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 p-3 text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-purple-400"
                placeholder="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />

              <textarea
                className="min-h-[110px] w-full rounded-xl border border-white/10 bg-slate-900/70 p-3 text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-purple-400"
                placeholder="Description"
                value={eduDescription}
                onChange={(e) => setEduDescription(e.target.value)}
              />

              <button className="w-full rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-[1.02]">
                {editEduId ? "Update Education" : "Add Education"}
              </button>
            </form>

            <div className="mt-6 space-y-4">
              {education.map((edu, index) => (
                <div
                  key={edu._id}
                  className="flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-4 transition duration-300 hover:-translate-y-1 sm:flex-row sm:items-center"
                  style={{
                    animation: `fadeUp 0.6s ease forwards`,
                    animationDelay: `${index * 0.06}s`,
                    opacity: 0,
                  }}
                >
                  <div>
                    <p className="font-semibold text-white">{edu.degree}</p>
                    <p className="text-sm text-slate-300">{edu.college}</p>
                    <p className="text-xs text-slate-400">{edu.year}</p>
                    {edu.description && (
                      <p className="mt-2 text-sm text-slate-400">
                        {edu.description}
                      </p>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => handleEditEducation(edu)}
                      className="text-sm font-medium text-yellow-400 hover:text-yellow-300"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDeleteEducation(edu._id)}
                      className="text-sm font-medium text-red-400 hover:text-red-300"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PROJECT LIST */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl animate-fadeUp lg:col-span-2">
            <h2 className="mb-6 text-2xl font-semibold text-white">
              All Projects
            </h2>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => (
                <div
                  key={project._id}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                  style={{
                    animation: `fadeUp 0.6s ease forwards`,
                    animationDelay: `${index * 0.08}s`,
                    opacity: 0,
                  }}
                >
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="mb-4 h-44 w-full rounded-xl object-cover border border-white/10"
                    />
                  )}

                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg bg-slate-800 px-3 py-2 text-sm text-cyan-300 transition hover:bg-slate-700"
                      >
                        GitHub
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg bg-slate-800 px-3 py-2 text-sm text-green-300 transition hover:bg-slate-700"
                      >
                        Live
                      </a>
                    )}

                    <button
                      onClick={() => handleDeleteProject(project._id)}
                      className="rounded-lg bg-red-500 px-3 py-2 text-sm text-white transition hover:scale-105"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
    </div>
  );
};

export default Admin;
