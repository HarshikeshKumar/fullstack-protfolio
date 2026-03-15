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
            href="https://github.com/HarshikeshKumar"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/harshikesh-kumar/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.facebook.com/gaurav.singh.763646"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.instagram.com/_gaurav_singh1725/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://stackoverflow.com/users/23549866/harshikesh-kumar"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-400 transition"
          >
            <FaStackOverflow />
          </a>

          <a
            href="mailto:harshikeshkoili214@gmail.com"
            className="hover:text-red-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
          harshikeshkoili214@gmail.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
