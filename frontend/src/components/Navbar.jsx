import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="flex justify-between items-center p-6 bg-slate-900"
    >
      <h1 className="text-xl font-bold">Harshikesh.dev</h1>

      <div className="space-x-6">
        <Link to="/">Home</Link>

        <a href="#projects">Projects</a>

        <a href="#contact">Contact</a>

        <Link to="/admin" className="text-yellow-400">
          Admin
        </Link>
      </div>
    </motion.nav>
  );
}
