// import Project from "../models/Project.js";

// export const getProjects = async (req, res) => {
//   const projects = await Project.find();
//   res.json(projects);
// };

// export const addProject = async (req, res) => {
//   const project = new Project(req.body);
//   await project.save();
//   res.json(project);
// };

// export const updateProject = async (req, res) => {
//   const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   });
//   res.json(project);
// };

// export const deleteProject = async (req, res) => {
//   await Project.findByIdAndDelete(req.params.id);
//   res.json({ message: "Project Deleted" });
// };

import Project from "../models/Project.js";

export const getProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

export const addProject = async (req, res) => {
  try {
    const { title, description, github, live } = req.body;

    const image = req.file ? req.file.path : "";

    const project = new Project({
      title,
      description,
      image,
      github,
      live,
    });

    await project.save();

    res.json(project);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Project add failed" });
  }
};

export const updateProject = async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.json(project);
};

export const deleteProject = async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);

  res.json({ message: "Project Deleted" });
};
