import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 1 }}
        className="fixed flex w-full 
        duration-300 py-5 left-0 right-0 mx-auto h-[10vh] max-w-7xl bg-[#070708] 
         border-gray-200 dark:border-gray-100/30 z-40 max-md:p-6 px-4 sm:px-6 lg:px-8"
      >
        <div className="flex mx-auto items-center justify-between w-full ">
          <Link
            href="/"
            className="text-2xl tracking-tighter font-bold hover:bg-slate-100/10 rounded-3xl"
          >
            pedrofelippe.
          </Link>

          <div className=" border-gray-200 dark:border-gray-700">
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
      </motion.header>
    </>
  );
};

export default Header;
