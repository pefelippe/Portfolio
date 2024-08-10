import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { FaBlog, FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 1 }}
      className="absolute top-0 flex items-center justify-between w-full px-8 pt-6 mx-auto backdrop-blur"
    >
      <button className="flex items-center py-2 text-2xl font-bold transition-all rounded-full  hover:text-gray-300">
        <Link href="/" className="text-2xl tracking-tighter text-bold">
          pedrofelippe.
        </Link>
      </button>

      <div className="flex gap-6 mt-4">
        <Link
          href="https://www.linkedin.com/in/pedro-felippe/"
          target="_blank"
          className="flex items-center text-gray-800 hover:text-blue-600 transition-colors"
        >
          <FaLinkedin className="text-2xl" />
        </Link>
        <Link
          href="https://github.com/pefelippe"
          className="flex items-center text-gray-800 hover:text-black transition-colors"
        >
          <FaGithub className="text-2xl" />
        </Link>
        <Link
          href="#"
          target="_blank"
          className="flex items-center text-gray-800 hover:text-green-600 transition-colors"
        >
          <FaBlog className="text-2xl" />
        </Link>
      </div>
    </motion.header>
  );
};

export default Header;
