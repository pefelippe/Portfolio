import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { GithubIcon, Linkedin, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

import AnimatedBtn from "../animated/AnimatedBtn";
import { ModeToggle } from "../ui/mode-toggle";

export const Logo = () => {
  return (
    <button className=" flex text-2xl transition-all w-fit uppercase tracking-tighter font-semibold hover:text-gray-600 dark:hover:text-gray-300 ">
      Pedro Felippe
    </button>
  );
};

const Header = () => {
  return (
    <motion.header className=" flex py-8 w-full z-40 mx-auto ">
      <motion.nav
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className=" flex w-full mx-auto items-center justify-between  max-sm:max-w-lg  section "
      >
        <Link href="/">
          <Logo />
        </Link>

        <motion.div
          className="flex top-0 bottom-0 h-full justify-center font-medium
         max-xs:hidden items-center w-fit space-x-8 text-base tracking-widest"
        >
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/pedro-felippe/"
            className={`tracking-wide hover:text-blue`}
          >
            <Linkedin className="h-7 w-7" />
          </Link>

          <Link
            target="_blank"
            href="https://github.com/pefelippe"
            className={`tracking-wide hover:text-blue`}
          >
            <GithubIcon className="h-7 w-7" />
          </Link>

          {/* <motion.div
            className="flex  h-full justify-center  rounded-t-xl 
            items-center w-fit  space-x-4 lg:justify-between "
          >
            <AnimatedBtn>
              <ModeToggle />
            </AnimatedBtn>
          </motion.div> */}
        </motion.div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
