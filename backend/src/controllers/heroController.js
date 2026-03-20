import Hero from "../models/heroModel.js";

export const getHeroContent = async (req, res) => {
  try {
    let hero = await Hero.findOne();

    if (!hero) {
      hero = await Hero.create({});
    }

    res.status(200).json(hero);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch hero content" });
  }
};

export const updateHeroContent = async (req, res) => {
  try {
    const { heading, subheading, description } = req.body;

    let hero = await Hero.findOne();

    if (!hero) {
      hero = await Hero.create({
        heading,
        subheading,
        description,
      });
    } else {
      hero.heading = heading;
      hero.subheading = subheading;
      hero.description = description;
      await hero.save();
    }

    res.status(200).json({
      message: "Hero content updated successfully",
      hero,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to update hero content" });
  }
};
