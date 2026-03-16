import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-lg"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="text-lg font-bold sm:text-2xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          Harshikesh.dev
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            to="/"
            className="relative group text-gray-300 hover:text-white transition"
          >
            Home
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <a
            href="#projects"
            className="relative group text-gray-300 hover:text-white transition"
          >
            Projects
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#contact"
            className="relative group text-gray-300 hover:text-white transition"
          >
            Contact
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <Link
            to="/admin"
            className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 font-semibold text-black transition duration-300 hover:scale-105"
          >
            Admin
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white md:hidden"
        >
          {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="border-t border-white/10 bg-slate-950/95 px-4 py-4 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-3">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-gray-300 transition hover:bg-white/5 hover:text-white"
              >
                Home
              </Link>

              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-gray-300 transition hover:bg-white/5 hover:text-white"
              >
                Projects
              </a>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-gray-300 transition hover:bg-white/5 hover:text-white"
              >
                Contact
              </a>

              <Link
                to="/admin"
                onClick={() => setIsOpen(false)}
                className="rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-3 text-center font-semibold text-black transition duration-300 hover:scale-[1.02]"
              >
                Admin
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
