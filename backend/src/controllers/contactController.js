// import Contact from "../models/Contact.js";
// import sendEmail from "../utils/sendEmail.js";

// export const sendContact = async (req, res) => {
//   const contact = new Contact(req.body);
//   await contact.save();

//   await sendEmail(req.body);

//   res.json({ message: "Message Sent" });
// };

import Contact from "../models/Contact.js";
import sendEmail from "../utils/sendEmail.js";

export const sendContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validation
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Save to database
    const contact = new Contact({
      name,
      email,
      phone,
      message,
    });

    await contact.save();

    // Send email
    await sendEmail({ name, email, phone, message });

    res.status(200).json({ message: "Message Sent Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
