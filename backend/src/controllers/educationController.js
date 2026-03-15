import Education from "../models/Education.js";

// GET ALL
export const getEducation = async (req, res) => {
  const education = await Education.find();
  res.json(education);
};

// ADD
export const addEducation = async (req, res) => {
  const { degree, college, year, description } = req.body;

  const newEducation = new Education({
    degree,
    college,
    year,
    description,
  });

  await newEducation.save();

  res.json(newEducation);
};

// DELETE
export const deleteEducation = async (req, res) => {
  await Education.findByIdAndDelete(req.params.id);
  res.json({ message: "Education deleted" });
};

// UPDATE
export const updateEducation = async (req, res) => {
  const { degree, college, year, description } = req.body;

  const updated = await Education.findByIdAndUpdate(
    req.params.id,
    { degree, college, year, description },
    { new: true },
  );

  res.json(updated);
};
