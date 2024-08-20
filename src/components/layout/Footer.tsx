import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 1 }}
      className="dark:bg-[#121212] w-full border my-10 max-w-6xl mx-auto rounded-3xl  items-center flex flex-col p-4 gap-4 border-t border-gray-100/10"
    >
      <div className=" flex gap-6 items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link
            href="https://www.linkedin.com/in/pedro-felippe/"
            target="_blank"
            className="flex items-center justify-center  bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full shadow-lg dark:hover:bg-gray-600 transition-colors duration-300"
          >
            <FaLinkedin className="text-2xl" />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link
            href="https://github.com/pefelippe"
            target="_blank"
            className="flex items-center justify-center   text-gray-800 dark:text-gray-200 rounded-full shadow-lg  dark:hover:bg-gray-600 transition-colors duration-300"
          >
            <FaGithub className="text-2xl" />
          </Link>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
