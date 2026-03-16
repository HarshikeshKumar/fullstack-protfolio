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
    <footer className="relative mt-24 overflow-hidden border-t border-white/10 bg-slate-950 text-gray-400">
      {/* animated glow background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl animate-pulse"></div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col items-center gap-8 animate-fadeUp">
        <h2 className="text-2xl font-semibold text-white">Connect With Me</h2>

        {/* social icons */}
        <div className="flex flex-wrap justify-center gap-6 text-2xl">
          <a
            href="https://github.com/HarshikeshKumar"
            target="_blank"
            rel="noreferrer"
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition duration-300 hover:scale-110 hover:border-cyan-400 hover:text-white"
          >
            <FaGithub className="transition duration-300 group-hover:rotate-12" />
          </a>

          <a
            href="https://www.linkedin.com/in/harshikesh-kumar/"
            target="_blank"
            rel="noreferrer"
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition duration-300 hover:scale-110 hover:border-blue-400 hover:text-blue-400"
          >
            <FaLinkedin className="transition duration-300 group-hover:rotate-12" />
          </a>

          <a
            href="https://www.facebook.com/gaurav.singh.763646"
            target="_blank"
            rel="noreferrer"
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition duration-300 hover:scale-110 hover:border-blue-500 hover:text-blue-500"
          >
            <FaFacebook className="transition duration-300 group-hover:rotate-12" />
          </a>

          <a
            href="https://www.instagram.com/_gaurav_singh1725/"
            target="_blank"
            rel="noreferrer"
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition duration-300 hover:scale-110 hover:border-pink-400 hover:text-pink-400"
          >
            <FaInstagram className="transition duration-300 group-hover:rotate-12" />
          </a>

          <a
            href="https://stackoverflow.com/users/23549866/harshikesh-kumar"
            target="_blank"
            rel="noreferrer"
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition duration-300 hover:scale-110 hover:border-orange-400 hover:text-orange-400"
          >
            <FaStackOverflow className="transition duration-300 group-hover:rotate-12" />
          </a>

          <a
            href="mailto:harshikeshkoili214@gmail.com"
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition duration-300 hover:scale-110 hover:border-red-400 hover:text-red-400"
          >
            <FaEnvelope className="transition duration-300 group-hover:rotate-12" />
          </a>
        </div>

        <p className="text-center text-sm text-slate-400">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
          <br />
          <span className="text-slate-500">harshikeshkoili214@gmail.com</span>
        </p>
      </div>

      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeUp {
            animation: fadeUp 0.8s ease forwards;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
