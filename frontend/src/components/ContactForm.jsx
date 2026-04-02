import { useState } from "react";
import api from "../api/api";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await api.post("/contact", form);

      setStatus({
        type: "success",
        message: "Message sent successfully",
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24">
      {/* background glow same as certificates */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-fuchsia-500/10 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* 🔥 Heading Section */}
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300 backdrop-blur-md">
            Get In Touch
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Contact Me
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Let’s connect and discuss your project, ideas, or opportunities.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl sm:p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Full Name
              </label>
              <input
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-slate-900/40 p-3.5 text-white outline-none transition duration-300 placeholder:text-slate-400 focus:border-cyan-400"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-slate-900/40 p-3.5 text-white outline-none transition duration-300 placeholder:text-slate-400 focus:border-cyan-400"
                required
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Mobile Number
            </label>
            <input
              name="phone"
              type="text"
              placeholder="Enter your mobile number"
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-slate-900/40 p-3.5 text-white outline-none transition duration-300 placeholder:text-slate-400 focus:border-cyan-400"
              required
            />
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Your Message
            </label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              value={form.message}
              onChange={handleChange}
              rows="5"
              className="w-full resize-none rounded-2xl border border-white/10 bg-slate-900/40 p-3.5 text-white outline-none transition duration-300 placeholder:text-slate-400 focus:border-cyan-400"
              required
            />
          </div>

          {status.message && (
            <div
              className={`mt-5 rounded-2xl px-4 py-3 text-sm font-medium ${
                status.type === "success"
                  ? "border border-green-400/20 bg-green-500/10 text-green-300"
                  : "border border-red-400/20 bg-red-500/10 text-red-300"
              }`}
            >
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 font-semibold text-white transition duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
