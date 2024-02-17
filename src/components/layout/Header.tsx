import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export const Logo = () => {
  return (
    <button className=" flex text-xl  transition-all w-fit  tracking-tighter font-bold hover:text-blue">
      Pedro Felippe
    </button>
  );
};

const Header = () => {
  return (
    <motion.header className="fixed text-zinc-50 bg-gray-900	 flex  h-16  w-full  z-50 px-6">
      <motion.nav
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex w-full mx-auto items-center justify-between   max-w-7xl"
      >
        <Link href="/">
          <Logo />
        </Link>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
