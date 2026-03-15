import { useState, useEffect } from "react";
import api from "../api/api";

const Admin = () => {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);

  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // IMAGE STATE CHANGE
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
  }, []);

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

  // IMAGE SELECT FROM DEVICE
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  // PROJECT ADD WITH CLOUDINARY IMAGE
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
    <div className="min-h-screen bg-slate-900 p-10 text-white">
      <h1 className="text-4xl font-bold text-center mb-10">Admin Dashboard</h1>

      {/* PROFILE PHOTO */}

      <div className="bg-white text-black p-8 rounded-xl max-w-2xl mx-auto mb-12">
        <h2 className="text-2xl mb-6">Profile Photo</h2>

        <input type="file" accept="image/*" onChange={handlePhotoChange} />

        {preview && (
          <img
            src={preview}
            alt="profile preview"
            className="w-40 h-40 rounded-full mt-4 object-cover border"
          />
        )}

        <div className="flex gap-4 mt-4">
          <button
            onClick={uploadPhoto}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Upload Photo
          </button>

          <button
            onClick={removePhoto}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Remove Photo
          </button>
        </div>
      </div>

      {/* ADD PROJECT */}

      <div className="bg-white text-black p-8 rounded-xl max-w-2xl mx-auto mb-12">
        <h2 className="text-2xl mb-6">Add Project</h2>

        <form onSubmit={handleAddProject} className="space-y-4">
          <input
            className="border p-3 w-full rounded"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="border p-3 w-full rounded"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input type="file" onChange={handleImageChange} />

          {previewImage && (
            <img
              src={previewImage}
              alt="preview"
              className="w-40 h-40 object-cover rounded"
            />
          )}

          <input
            className="border p-3 w-full rounded"
            placeholder="Github Link"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
          />

          <input
            className="border p-3 w-full rounded"
            placeholder="Live Link"
            value={live}
            onChange={(e) => setLive(e.target.value)}
          />

          <button className="bg-blue-600 text-white px-6 py-2 rounded">
            Add Project
          </button>
        </form>
      </div>

      <div className="bg-white text-black p-8 rounded-xl max-w-2xl mx-auto mb-12">
        <h2 className="text-2xl mb-6">Skills</h2>

        <form
          onSubmit={editId ? handleUpdateSkill : handleAddSkill}
          className="flex gap-4 mb-6"
        >
          <input
            className="border p-2 flex-1"
            placeholder="Skill Name"
            value={skillName}
            onChange={(e) => setSkillName(e.target.value)}
          />

          <input
            className="border p-2 w-32"
            placeholder="Level %"
            value={skillLevel}
            onChange={(e) => setSkillLevel(e.target.value)}
          />

          <button className="bg-green-600 text-white px-4 py-2 rounded">
            {editId ? "Update" : "Add"}
          </button>
        </form>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <div
              key={skill._id}
              className="bg-slate-800 text-white px-4 py-2 rounded flex gap-3 items-center"
            >
              {skill.name} ({skill.level}%)
              <button
                onClick={() => handleEditSkill(skill)}
                className="text-yellow-400"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteSkill(skill._id)}
                className="text-red-400"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white text-black p-8 rounded-xl max-w-2xl mx-auto mb-12">
        <h2 className="text-2xl mb-6">Education</h2>

        <form
          onSubmit={editEduId ? handleUpdateEducation : handleAddEducation}
          className="space-y-4"
        >
          <input
            className="border p-3 w-full rounded"
            placeholder="Degree"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />

          <input
            className="border p-3 w-full rounded"
            placeholder="College"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
          />

          <input
            className="border p-3 w-full rounded"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />

          <textarea
            className="border p-3 w-full rounded"
            placeholder="Description"
            value={eduDescription}
            onChange={(e) => setEduDescription(e.target.value)}
          />

          <button className="bg-purple-600 text-white px-6 py-2 rounded">
            {editEduId ? "Update Education" : "Add Education"}
          </button>
        </form>

        <div className="mt-6 space-y-3">
          {education.map((edu) => (
            <div
              key={edu._id}
              className="bg-slate-800 text-white p-4 rounded flex justify-between"
            >
              <div>
                <p className="font-semibold">{edu.degree}</p>
                <p className="text-sm">{edu.college}</p>
                <p className="text-xs text-gray-400">{edu.year}</p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => handleEditEducation(edu)}
                  className="text-yellow-400"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDeleteEducation(edu._id)}
                  className="text-red-400"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
