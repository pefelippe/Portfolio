import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  const router = useRouter();

  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-6  w-full  mx-auto   bg-gradient-to-r fixed top-0 left-0 right-0 z-40 py-4 flex items-center justify-center
       from-white to-gray-100 text-gray-800 dark:border-gray-100/30  "
    >
      <div className="flex mx-auto items-center justify-between w-full gap-6">
        <motion.a
          href="https://github.com/pefelippe"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-600 hover:text-indigo-500 transition-colors duration-300"
        >
          <FaGithub className="w-7 h-7" />
        </motion.a>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-2xl tracking-tighter font-extrabold">
            pedrofelippe.
          </h1>
        </motion.div>

        <motion.a
          href="https://www.linkedin.com/in/pedro-felippe/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-600 hover:text-indigo-500 transition-colors duration-300"
        >
          <FaLinkedin className="w-7 h-7" />
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Header;
