import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { GithubIcon, Linkedin, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

import AnimatedBtn from "../animated/AnimatedBtn";
import { ModeToggle } from "../ui/mode-toggle";
import { Button } from "../ui/button";

export const Logo = () => {
  return (
    <button className=" flex text-xl tracking-tighter font-bold ">
      Pedro Felippe
    </button>
  );
};

const Header = () => {
  return (
    <motion.header
      className="fixed flex  w-full z-40 mx-auto  h-20 bg-white text-[#101010] left-0 right-0
    dark:bg-[#0b0b0e] dark:text-[#f2f2f2] px-6 max-w-4xl justify-between "
    >
      <motion.div
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
          {/* <Button className="p-6 text-white rounded text-lg"></Button> */}
          Contact
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

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 1 }}
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
    </motion.header>
  );
};

export default Header;
