import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

import AnimatedBtn from "../animated/AnimatedBtn";
import { ContactDialog } from "../ContactDialog";
import MessageForm from "../MessageForm";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { ModeToggle } from "../ui/mode-toggle";
import { Separator } from "../ui/separator";

export const Logo = () => {
  return (
    <button className=" flex text-xl  transition-all w-fit  tracking-tighter font-bold hover:text-blue">
      Pedro Felippe
    </button>
  );
};

const Header = () => {
  return (
    <motion.header className="fixed text-zinc-50 bg-blue	 flex  h-16  w-full  z-50 px-6">
      <motion.nav
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex w-full mx-auto items-center justify-between   max-w-7xl"
      >
        <Link href="/">
          <Logo />
        </Link>

        {/* <motion.div
          className="flex  top-0 bottom-0 h-full justify-center 
            items-center w-fit space-x-4 max-w-sm"
        >
          <AnimatedBtn
            target="_blank"
            href="https://www.linkedin.com/in/pedro-felippe/"
          >
            <LinkedinIcon className="h-6 w-6" />
          </AnimatedBtn>

          <AnimatedBtn href="https://github.com/pefelippe">
            <GitHubLogoIcon className="h-6 w-6" />
          </AnimatedBtn>
        </motion.div> */}
      </motion.nav>
    </motion.header>
  );
};

export default Header;
