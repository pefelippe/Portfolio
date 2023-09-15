import { motion } from "framer-motion";
import Link from "next/link";

import AnimateLink from "../animated/AnimatedLink";

const Navbar = () => {
  return (
    <motion.nav
      className="fixed w-full   font-roboto max-h-[10vh]   left-0 right-0 top-0  text-gray-100 
      items-center justify-center flex mx-auto  mr-[16px] shadow bg-[#fff]
      text-lg font-normal  z-10   max-md:px-8"
    >
      <div className="max-w-7xl  justify-center md:justify-between flex items-center w-full py-7">
        <AnimateLink href="/" className="text-2xl  font-semibold ">
          Pedro Felippe
        </AnimateLink>
        <div className="flex items-center max-md:hidden gap-[40px] font-[13px]">
          <Link href="/about" className="headerLink">
            About
          </Link>
          <Link href="/projects" className="headerLink">
            Projects
          </Link>

          <AnimateLink
            href="/contact"
            className="px-6 text-center font-semibold bg-blue hover:underline min-w-fit
          text-[#f5f5f5] leading-tight hover:bg-blue/90 transition-all 
           py-3  rounded-full "
          >
            Contact-me
          </AnimateLink>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
