import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 1 }}
      className="border-t w-full flex mt-16 text-center justify-between items-center  px-4 sm:px-6 lg:px-8 max-w-screen-2xl  mx-auto  py-6 sm:py-10 gap-4 border-gray-100/10"
    >
      <p className="gap-2 text-sm sm:text-md text-gray-600 dark:text-gray-400">
        Pedro Felippe &copy; {new Date().getFullYear()}
      </p>

      <div className=" border-gray-200 dark:border-gray-700">
        <div className="flex justify-center space-x-4">
          <motion.a
            href="https://github.com/pefelippe"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
          >
            <FaGithub className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/pedro-felippe/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
          >
            <FaLinkedin className="w-6 h-6" />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
