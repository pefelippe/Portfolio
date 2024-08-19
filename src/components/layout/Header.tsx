import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const toggleColor = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 1 }}
      className="fixed flex w-full border-b border-gray-100/10 z-50  bg-[#fefefe] dark:bg-[#09090b]"
    >
      <div className="flex mx-auto items-center justify-between w-full px-6 pt-5 pb-5 max-w-6xl">
        <button className="flex items-center text-2xl font-bold transition-all rounded-full hover:text-gray-300">
          <Link href="/" className="text-xl tracking-tighter text-bold">
            pedrofelippe.
          </Link>
        </button>

        <div className="flex gap-6 items-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              href="https://www.linkedin.com/in/pedro-felippe/"
              target="_blank"
              className="flex items-center text-gray-800 dark:text-gray-200"
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
              className="flex items-center transition-colors text-gray-800 dark:text-gray-200"
            >
              <FaGithub className="text-2xl" />
            </Link>
          </motion.div>
          <motion.button
            onClick={toggleColor}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            whileTap={{ scale: 0.9, rotate: 360 }}
            whileHover={{ scale: 1.1, rotate: 180 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.span
              animate={{ rotate: theme === "light" ? 0 : 360 }}
              transition={{ duration: 0.5 }}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </motion.span>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
