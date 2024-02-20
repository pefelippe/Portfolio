import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

import AnimatedBtn from "../animated/AnimatedBtn";

export const Logo = () => {
  return (
    <button className=" flex text-lg  transition-all w-fit  tracking-tigher font-bold hover:text-blue uppercase">
      PedroFelippe
    </button>
  );
};

const Header = () => {
  return (
    <motion.header className="fixed  flex  h-20  w-full  z-50 px-6 bg-gray-900 text-white ">
      <motion.nav
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex w-full mx-auto items-center justify-between  max-w-screen-2xl max-sm:max-w-md"
      >
        <Link href="/">
          <Logo />
        </Link>

        <motion.div
          className="flex  top-0 bottom-0 h-full justify-center 
            items-center w-fit space-x-6 max-w-sm"
        >
          <AnimatedBtn
            target="_blank"
            href="https://www.linkedin.com/in/pedro-felippe/"
          >
            <LinkedinIcon className="h-7 w-7 hover:text-blue" />
          </AnimatedBtn>

          <AnimatedBtn href="https://github.com/pefelippe">
            <GitHubLogoIcon className="h-7 w-7 hover:text-blue" />
          </AnimatedBtn>
        </motion.div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
