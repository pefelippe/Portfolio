import { motion } from "framer-motion";

import AnimateLink from "../animated/AnimatedLink";
import AnimatedBtn from "./../animated/AnimatedBtn";

const Navbar = () => {
  return (
    <motion.nav
      className=" z-40 w-full backdrop-blur  transition-colors 
    duration-500 left-0 right-0 top-0  text-gray-100 h-[10vh]
    items-center justify-center flex mx-auto  
     border-gray-700/10  max-md:px-8  py-4 text-base px-10
    leading-6 font-normal text-slate-700 dark:text-slate-200 bg-white"
    >
      <div className="flex w-full max-w-screen-2xl justify-between items-center space-x-2">
        <AnimateLink href="/" className="font-bold text-xl  text-gray-900">
          Pedro Felippe
        </AnimateLink>
        <div className=" flex items-center space-x-2  md:space-x-6 justify-center">
          <AnimatedBtn
            target="_blank"
            href="https://docs.google.com/document/d/e/2PACX-1vQ0oK4H_ynaCvtXwtO4OvYmIIt4_6vn8lTQlWqj2KnoTR4ZfUWCzjpAuDPGToTPzwoqkN9FIEbiD7MU/pub"
            className="bg-blue rounded-md px-4 text-white py-2 text-md  hover:bg-blue/80 transition-all"
          >
            <p>Resume</p>
          </AnimatedBtn>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
