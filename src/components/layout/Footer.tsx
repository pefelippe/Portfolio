import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 1 }}
      className="border-t w-full flex mt-16  text-center justify-center max-md:p-6  max-w-6xl mx-auto items-center py-6 sm:py-10 gap-4 border-gray-100/10"
    >
      <p className=" gap-2 text-sm sm:text-md text-gray-600 dark:text-gray-400">
        Pedro Felippe &copy; {new Date().getFullYear()}
      </p>

      {/* <div className="flex gap-4 sm:gap-6 items-center">
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
      </div> */}
    </motion.footer>
  );
}

export default Footer;
