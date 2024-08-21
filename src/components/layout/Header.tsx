import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState } from "react";
import { ModeToggle } from "../ui/mode-toggle";
import { Menu } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaHome,
  FaUser,
  FaEnvelope,
  FaCode,
} from "react-icons/fa";

const Header = () => {
  const { theme } = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 1 }}
        className="fixed flex w-full bg-[#fefefe] dark:bg-[#09090b] transition-colors duration-300 py-5 left-0 right-0 mx-auto
         border-gray-200 dark:border-gray-100/30 z-40 max-md:p-6"
      >
        <div className="flex mx-auto items-center justify-between w-full max-w-screen-md">
          <Link
            href="/"
            className="text-2xl tracking-tighter font-bold hover:bg-slate-100/10 rounded-3xl"
          >
            pedrofelippe.
          </Link>

          <div className="flex gap-4 items-center">
            {/* <ModeToggle /> */}
            <motion.button
              onClick={toggleDrawer}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-300"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
            >
              <Menu className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleDrawer}
        />
      )}

      {/* Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isDrawerOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 h-full w-full max-w-[500px] bg-white dark:bg-[#141418] shadow-lg z-40 transition-colors duration-300 flex flex-col"
      >
        <div className="flex justify-end p-6">
          <motion.button
            onClick={toggleDrawer}
            className="text-2xl font-bold hover:text-gray-600 dark:hover:text-gray-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ✕
          </motion.button>
        </div>
        <nav className="flex flex-col items-center justify-center flex-grow px-6 py-8 space-y-8">
          {[
            { href: "/", label: "Home", icon: FaHome },
            { href: "/about", label: "About", icon: FaUser },
            { href: "/projects", label: "Projects", icon: FaCode },
            { href: "/contact", label: "Contact", icon: FaEnvelope },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="w-full py-3 flex items-center justify-center space-x-4 text-xl font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={toggleDrawer}
            >
              <item.icon className="w-6 h-6" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="p-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
            >
              <FaGithub className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
            >
              <FaLinkedin className="w-8 h-8" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
