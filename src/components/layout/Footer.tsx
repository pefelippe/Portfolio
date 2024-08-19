import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 1 }}
      className="dark:bg-[#121212] border border-gray-100/10  max-w-6xl mx-auto rounded-3xl w-fit items-center flex flex-col p-4 gap-4"
    >
      <div className="flex gap-4 items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link
            href="https://www.linkedin.com/in/pedro-felippe/"
            target="_blank"
            className="flex items-center text-gray-800 dark:text-gray-200"
          >
            <FaLinkedin className="text-3xl" />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link
            href="https://github.com/pefelippe"
            target="_blank"
            className="flex items-center transition-colors text-gray-800 dark:text-gray-200"
          >
            <FaGithub className="text-3xl" />
          </Link>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
