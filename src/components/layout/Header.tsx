import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTimes,
  FaBars,
  FaHome,
  FaUser,
  FaEnvelope,
} from "react-icons/fa";
import { useRouter } from "next/router";
import { useState } from "react";

const buttonData = [
  {
    text: "About Me",
    href: "/about",
    bgColor: "bg-blue-600",
    textColor: "text-gray-600",
    hoverBgColor: "hover:bg-blue-700",
    svgPath:
      "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
    delay: 1.5,
  },
  {
    text: "Contact",
    href: "/contact",
    bgColor: "bg-gray-800",
    textColor: "text-white",
    hoverBgColor: "hover:bg-gray-900",
    svgPath:
      "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z",
    delay: 1.9,
  },
];

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
      className="fixed w-full duration-300 py-5 left-0 right-0 mx-auto max-w-screen-2xl 
       bg-gradient-to-r from-white to-gray-100 text-gray-800
       border-gray-200 dark:border-gray-100/30 z-40  max-md:px-4 "
    >
      <div className="flex mx-auto items-center justify-between w-full">
        <Link href="/" className="text-2xl tracking-tighter font-bold">
          pedrofelippe.
        </Link>

        {/* <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-300"
          >
            {isMenuOpen ? "" : <FaBars className="w-8 h-8 text-white" />}
          </button>
        </div> */}

        <div
          className={`md:flex md:items-center hidden 
           flex-col md:flex-row font-semibold gap-8 mt-4 md:mt-0`}
        >
          {[
            { href: "/about", label: "About me" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-gray-400 ${
                isActive(link.href) ? "text-blue" : "text-gray-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile drawer */}
      {/* <motion.div
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

          <nav className="flex-grow py-8 px-6 hidden">
            <ul className="space-y-6">
              {[
                { href: "/", label: "Home", icon: FaHome },
                { href: "/about", label: "About", icon: FaUser },
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
            <div className="flex justify-center ">
              <motion.a
                href="https://github.com/pefelippe"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-black transition-colors duration-200"
              >
                <FaGithub className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/pedro-felippe/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-black transition-colors duration-200"
              >
                <FaLinkedin className="w-8 h-8" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div> */}
    </motion.header>
  );
};

export default Header;
