import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState } from "react";
import { ModeToggle } from "../ui/mode-toggle";
import { Menu } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
        className="fixed flex w-full bg-[#fefefe] dark:bg-[#09090b] transition-colors duration-300 border-b border-gray-200 dark:border-gray-100/30 z-50 p-6 md:px-12"
      >
        <div className="flex mx-auto items-center justify-between w-full  max-w-6xl ">
          <Link href="/" className="text-2xl tracking-tighter font-bold">
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
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleDrawer}
        />
      )}

      {/* Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isDrawerOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 h-full w-full max-w-[500px] bg-white dark:bg-[#141418] shadow-lg z-30 transition-colors duration-300"
      >
        <div className="flex justify-end m-6">
          <button onClick={toggleDrawer} className="text-2xl font-bold">
            ✕
          </button>
        </div>
        <nav className="flex flex-col items-center justify-start h-full pt-[45%]">
          {[
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="w-full py-5 flex items-center justify-center font-medium text-3xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
              onClick={toggleDrawer}
            >
              {item.label}
            </Link>
          ))}
          <div className="absolute bottom-4 flex gap-6 items-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="https://www.linkedin.com/in/pedro-felippe/"
                target="_blank"
                className="flex items-center justify-center w-14 h-14 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
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
                className="flex items-center justify-center w-14 h-14 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
              >
                <FaGithub className="text-3xl" />
              </Link>
            </motion.div>
          </div>
        </nav>
      </motion.div>
    </>
  );
};

export default Header;
