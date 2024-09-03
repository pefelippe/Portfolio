import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTimes,
  FaBars,
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import { useRouter } from "next/router";
import { useState } from "react";

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && router.pathname === "/") {
      return true;
    }
    return router.pathname.startsWith(path) && path !== "/";
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 1 }}
      className="fixed w-full duration-300 py-5 left-0 right-0 mx-auto h-auto max-w-7xl bg-[#070708] 
       border-gray-200 dark:border-gray-100/30 z-40 px-4 sm:px-6 lg:px-8"
    >
      <div className="flex mx-auto items-center justify-between w-full">
        <Link
          href="/"
          className="text-2xl tracking-tighter font-bold hover:bg-slate-100/10 rounded-3xl"
        >
          pedrofelippe.
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-300"
          >
            {isMenuOpen ? "" : <FaBars className="w-8 h-8 text-white" />}
          </button>
        </div>

        <div
          className={`md:flex md:items-center hidden 
           flex-col md:flex-row font-semibold gap-6 mt-4 md:mt-0`}
        >
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/projects", label: "Projects" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-gray-400 ${
                isActive(link.href) ? "text-blue" : "text-gray-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block border-gray-200 dark:border-gray-700">
          <div className="flex justify-center space-x-5">
            <motion.a
              href="https://github.com/pefelippe"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
            >
              <FaGithub className="w-7 h-7" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/pedro-felippe/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
            >
              <FaLinkedin className="w-7 h-7" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 h-full w-80 bg-[#070708] z-50 md:hidden overflow-y-auto"
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b border-gray-700">
            <h2 className="text-2xl font-bold text-white">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-grow py-8 px-6">
            <ul className="space-y-6">
              {[
                { href: "/", label: "Home", icon: FaHome },
                { href: "/about", label: "About", icon: FaUser },
                {
                  href: "/projects",
                  label: "Projects",
                  icon: FaProjectDiagram,
                },
                { href: "/contact", label: "Contact", icon: FaEnvelope },
              ].map((link) => (
                <motion.li
                  key={link.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`w-full py-4 px-6 flex items-center justify-between text-lg font-semibold text-white rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 ${
                      isActive(link.href) ? "border-l-4 border-blue-500" : ""
                    }`}
                  >
                    <span className="flex items-center">
                      <link.icon className="w-6 h-6 mr-4" />
                      {link.label}
                    </span>
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      className="text-white opacity-60"
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="p-6 border-t border-gray-700">
            <div className="flex justify-center space-x-6">
              <motion.a
                href="https://github.com/pefelippe"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaGithub className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/pedro-felippe/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaLinkedin className="w-8 h-8" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
