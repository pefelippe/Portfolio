import { motion } from "framer-motion";

import AnimateLink from "../animated/AnimatedLink";

const Navbar = () => {
  return (
    <motion.nav
      className="sticky z-40 w-full backdrop-blur  transition-colors 
    duration-500 left-0 right-0 top-0  text-gray-100 h-[10vh]
    items-center justify-center flex mx-auto   border border-b
     border-gray-700/10  max-md:px-8  py-4 text-base 
    leading-6 font-normal text-slate-700 dark:text-slate-200 bg-white"
    >
      <div className="flex w-full max-w-4xl justify-between items-center space-x-2">
        <AnimateLink href="/" className="font-semibold text-xl tracking-[1px]">
          Pedro Felippe
        </AnimateLink>
        <div className=" flex items-center space-x-2  md:space-x-6 justify-center">
          <AnimateLink href="/" className=" headerLink ">
            Home
          </AnimateLink>

          <AnimateLink href="/about" className="headerLink">
            About
          </AnimateLink>
          <AnimateLink href="/projects" className="headerLink">
            Projects
          </AnimateLink>

          <AnimateLink href="/contact" className="headerLink  ">
            Contact
          </AnimateLink>
        </div>
        {/* <Links /> */}
      </div>
    </motion.nav>
  );
};

export default Navbar;
