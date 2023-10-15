import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  return (
    <motion.nav
      className=" z-40 w-full backdrop-blur  transition-colors 
    duration-500 left-0 right-0 top-0  text-gray-300 h-[10vh]
    items-center justify-center flex mx-auto  max-w-6xl p-10
     border-gray-700/10  max-md:px-8  py-4 text-base 
    leading-6 font-normal text-slate-700 dark:text-slate-200"
    >
      <div className="flex w-full  justify-start items-center space-x-2 ">
        <Link
          href="/"
          className="font-bold text-xl   px-2 py-2 rounded-md tracking-[3px] uppercase"
        >
          Pedro Felippe
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
