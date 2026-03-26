import Contact from "../models/Contact.js";
import sendEmail from "../utils/sendEmail.js";

export const sendContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    console.log("Step 1: Request received");

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    console.log("Step 2: Validation passed");

    const contact = new Contact({
      name,
      email,
      phone,
      message,
    });

    await contact.save();
    console.log("Step 3: Contact saved in DB");

    await sendEmail({ name, email, phone, message });
    console.log("Step 4: Email sent");

    res.status(200).json({ message: "Message Sent Successfully" });
  } catch (error) {
    console.log("Contact Controller Error:", error);

    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};
