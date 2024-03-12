import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { GithubIcon, Linkedin, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

import AnimatedBtn from "../animated/AnimatedBtn";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/mode-toggle";

export const Logo = () => {
  return (
    <button className=" flex text-lg tracking-tighter font-bold uppercase">
      <Link href="/" className={`tracking-wide hover:text-blue`}>
        Pedro Felippe
      </Link>
    </button>
  );
};

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 1 }}
      className=" fixed  w-full z-40  text-[#101010] left-0 right-0    "
    >
      <div className="w-full  mx-auto flex justify-between py-5 items-center section  max-w-5xl  px-6  bg-[#fff] rounded-b-md shadow">
        <Logo />
        {/* <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 1 }}
          className="flex  justify-start font-medium
        items-center w-fits space-x-8 text-base tracking-widest  "
        >
          <Link href="/" className={`tracking-wide hover:text-blue`}>
            Home
          </Link>

          <Link href="/about" className={`tracking-wide hover:text-blue`}>
            About
          </Link>

          <Link href="/contact" className={`tracking-wide hover:text-blue`}>
            Contact
          </Link>
        </motion.div> */}
        {/* <motion.div
            className="flex  h-full justify-center  rounded 
            items-center w-fit  space-x-4 lg:justify-between "
            >
            <AnimatedBtn>
            <ModeToggle />
            </AnimatedBtn>
          </motion.div> */}

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 1.25 }}
          className="flex justify-center
        items-center w-fit space-x-6 text-base tracking-widest"
        >
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/pedro-felippe/"
            className={`tracking-wide hover:text-blue`}
          >
            <Linkedin className="h-6 w-6" />
          </Link>

          <Link
            target="_blank"
            href="https://github.com/pefelippe"
            className={`tracking-wide hover:text-blue`}
          >
            <GithubIcon className="h-6 w-6" />
          </Link>

          {/* <motion.div
            className="flex  h-full justify-center  rounded 
            items-center w-fit  space-x-4 lg:justify-between "
            >
            <AnimatedBtn>
            <ModeToggle />
            </AnimatedBtn>
          </motion.div> */}
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
