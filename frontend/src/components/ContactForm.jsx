import { useState } from "react";
import api from "../api/api";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/contact", form);

      alert("Message Sent Successfully");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      alert("Failed to send message");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto flex flex-col gap-4 bg-slate-900 p-6 rounded-xl shadow-lg"
    >
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="p-3 rounded bg-slate-800 text-white outline-none"
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="p-3 rounded bg-slate-800 text-white outline-none"
        required
      />

      <input
        name="phone"
        type="text"
        placeholder="Mobile Number"
        value={form.phone}
        onChange={handleChange}
        className="p-3 rounded bg-slate-800 text-white outline-none"
        required
      />

      <textarea
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
        className="p-3 rounded bg-slate-800 text-white outline-none"
        rows="4"
        required
      />

      <button className="bg-blue-600 hover:bg-blue-700 transition p-3 rounded font-semibold">
        Send Message
      </button>
    </form>
  );
}
