import { motion } from "framer-motion";

import AnimatedBtn from "../animated/AnimatedBtn";
import AnimateLink from "../animated/AnimatedLink";

const Navbar = () => {
  return (
    <motion.nav
      className=" z-20 w-full backdrop-blur  transition-colors  fixed
    duration-500 left-0 right-0 top-0  text-white 
    items-center justify-center flex mx-auto   p-10
     border-gray-700/10   py-4 text-base px-10 xl:px-20  mr-6
    leading-6 font-normal text-slate-700 dark:text-slate-200"
    >
      <div className="flex w-full  justify-start items-center">
        <AnimateLink
          href="/"
          className="font-bold text-xl x  px-2 py-2 tracking-[4px] uppercase hover:text-gray-300"
        >
          Pedro Felippe
        </AnimateLink>
      </div>

      <div className="flex relative max-md:hidden">
        <AnimatedBtn
          href="https://github.com/pefelippe"
          className="font-semibold text-md px-2 py-2 tracking-[4px] uppercase hover:text-gray-300"
        >
          <p>Github</p>
        </AnimatedBtn>

        <AnimatedBtn
          href="https://www.linkedin.com/in/pedro-felippe/"
          className="font-semibold text-md  px-2 py-2 tracking-[4px] uppercase hover:text-gray-300"
        >
          <p>Linkedin</p>
        </AnimatedBtn>
      </div>
    </motion.nav>
  );
};

export default Navbar;
