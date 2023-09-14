import { motion } from "framer-motion";
import Link from "next/link";

import AnimateLink from "../animated/AnimatedLink";

const Navbar = () => {
  return (
    <motion.nav
      className="absolute w-full  left-0 right-0  font-roboto max-h-[10vh]
      items-center justify-center flex mx-auto  bg-[#151515] mr-[16px]
      text-lg font-normal backdrop-blur-sm z-10  "
    >
      <div className=" max-w-7xl mx-auto px-8 justify-between flex items-center w-full">
        <AnimateLink
          href="/"
          className="text-xl text-[#fff] font-semibold py-8"
        >
          Pedro Felippe
        </AnimateLink>
        <div className="flex text-gray-100 max-md:hidden gap-[40px] font-[13px]">
          <Link href="/about" className="headerLink">
            About
          </Link>
          <Link href="/projects" className="headerLink">
            Projects
          </Link>
          <Link href="/contact" className="headerLink">
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
