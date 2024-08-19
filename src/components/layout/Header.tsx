import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 1 }}
      className="fixed flex w-full border-b border-gray-100/10 z-50 bg-[#09090b]"
    >
      <div className="flex mx-auto items-center justify-between w-full px-6 pt-5 pb-5 max-w-6xl">
        <button className="flex items-center text-2xl font-bold transition-all rounded-full hover:text-gray-300">
          <Link href="/" className="text-xl tracking-tighter text-bold">
            pedrofelippe.
          </Link>
        </button>

        <div className="flex gap-6">
          <Link
            href="https://www.linkedin.com/in/pedro-felippe/"
            target="_blank"
            className="flex items-center text-gray-50 transition-colors hover:text-blue"
          >
            <FaLinkedin className="text-2xl" />
          </Link>
          <Link
            href="https://github.com/pefelippe"
            className="flex items-center text-gray-50 transition-colors hover:text-blue"
          >
            <FaGithub className="text-2xl" />
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
