// import nodemailer from "nodemailer";

// const sendEmail = async ({ name, email, phone, message }) => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   await transporter.sendMail({
//     from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
//     to: process.env.EMAIL_USER,

//     subject: "New Contact Message",

//     html: `
//       <h2>New Contact Message</h2>

//       <p><b>Name:</b> ${name}</p>
//       <p><b>Email:</b> ${email}</p>
//       <p><b>Phone:</b> ${phone}</p>
//       <p><b>Message:</b> ${message}</p>
//     `,
//   });
// };

// export default sendEmail;

import nodemailer from "nodemailer";

const sendEmail = async ({ name, email, phone, message }) => {
  try {
    console.log("Step 5: Inside sendEmail");
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log("Step 6: Transporter created");

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Message",
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    console.log("Step 7: sendMail success");
  } catch (error) {
    console.log("sendEmail Error:", error);
    throw error;
  }
};

export default sendEmail;
