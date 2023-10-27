import { motion } from "framer-motion";

import AnimatedBtn from "../animated/AnimatedBtn";
import AnimateLink from "../animated/AnimatedLink";

const Navbar = () => {
  return (
    <motion.nav
      className=" w-full fixed text-white 
    items-center justify-center flex mx-auto  p-10 py-6 px-10 xl:px-20 
      text-base  mr-14
    leading-6 font-normal text-slate-700 dark:text-slate-200"
    >
      <div className="flex w-full  justify-start items-center">
        <AnimateLink
          href="/"
          className="font-bold text-xl x   tracking-[4px] uppercase hover:text-gray-300"
        >
          Pedro Felippe
        </AnimateLink>
      </div>

      <div className="flex relative max-md:hidden">
        <AnimateLink
          href="/contact"
          className="font-semibold text-md px-2 py-2 tracking-[4px] uppercase hover:text-gray-300"
        >
          <p>Contact</p>
        </AnimateLink>
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
