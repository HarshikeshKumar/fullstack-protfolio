import Project from "../models/Project.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to fetch projects" });
  }
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
  try {
    const { title, description, github, live } = req.body;

    const existingProject = await Project.findById(req.params.id);

    if (!existingProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    existingProject.title = title;
    existingProject.description = description;
    existingProject.github = github;
    existingProject.live = live;

    if (req.file) {
      existingProject.image = req.file.path;
    }

    await existingProject.save();

    res.json(existingProject);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Project update failed" });
  }
};

export const deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Project Deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Project delete failed" });
  }
};
