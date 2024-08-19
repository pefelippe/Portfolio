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

    </motion.footer>
  );
}

export default Footer;
