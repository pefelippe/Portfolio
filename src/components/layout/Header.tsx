import { motion } from "framer-motion";
import Link from "next/link";

import AnimateLink from "../animated/AnimatedLink";

const Navbar = () => {
  return (
    <motion.nav
      className="sticky z-40 w-full backdrop-blur  transition-colors 
    duration-500 left-0 right-0 top-0  text-gray-100 h-[8vh]
    items-center justify-center flex mx-auto  mr-[16px]  border border-b
     border-gray-700/10  max-md:px-8 py-4 text-sm 
    leading-6 font-semibold text-slate-700 dark:text-slate-200 bg-white"
    >
      <div className="max-w-5xl  justify-center md:justify-between flex items-center w-full ">
        <Link
          href="/"
          className="  text-xl text-[#090909] hover:text-[#090909]/80 "
        >
          Pedro Felippe
        </Link>
        <div className="gap-[40px]  relative hidden lg:flex items-center ml-auto ">
          <AnimateLink href="/about" className="headerLink">
            About
          </AnimateLink>
          <AnimateLink href="/projects" className="headerLink">
            Projects
          </AnimateLink>

          <AnimateLink href="/contact" className="headerLink ">
            Contact-me
          </AnimateLink>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
