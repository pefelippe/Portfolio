import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

import AnimatedBtn from "../animated/AnimatedBtn";
import { Button } from "../ui/button";

export const Logo = () => {
  return (
    <button className=" flex text-lg  transition-all w-fit  tracking-tigher font-bold hover:text-blue uppercase">
      Pedro Felippe
    </button>
  );
};

const Header = () => {
  return (
    <motion.header className="fixed  flex  h-20  w-full  z-50 px-6 text-white bg-gray-900 ">
      <motion.nav
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="flex w-full mx-auto items-center justify-between  max-w-screen-2xl max-sm:max-w-lg"
      >
        <Link href="/">
          <Logo />
        </Link>

        <motion.div
          className="flex  top-0 bottom-0 h-full justify-center 
            items-center w-fit space-x-6 "
        >
          <Link
            href="/contact"
            className="text-xl py-6 rounded items-center gap-1  max-sm:w-full  tracking-normal font-semibold hover:text-blue"
          >
            Contact
          </Link>
        </motion.div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
