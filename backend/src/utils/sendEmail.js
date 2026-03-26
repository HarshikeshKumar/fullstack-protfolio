import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({ name, email, phone, message }) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.EMAIL_USER],
      reply_to: email,
      subject: "New Contact Message",
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    if (error) {
      console.log("Resend error:", error);
      throw new Error(error.message || "Email sending failed");
    }

    console.log("Email sent successfully:", data);
    return data;
  } catch (error) {
    console.log("sendEmail Error:", error);
    throw error;
  }
};

export default sendEmail;
