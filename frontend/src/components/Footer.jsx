import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaStackOverflow,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-400 border-t border-slate-700 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col items-center gap-6">
        <h2 className="text-xl font-semibold text-white">Connect With Me</h2>

        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebook />
          </a>

          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://stackoverflow.com/users/yourid"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-400 transition"
          >
            <FaStackOverflow />
          </a>

          <a
            href="mailto:your@email.com"
            className="hover:text-red-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
