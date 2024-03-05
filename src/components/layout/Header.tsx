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
  const router = useRouter();

  const isActive = (path: string) =>
    path === router.pathname ? "text-blue font-medium" : "";

  return (
    <motion.header className=" flex pt-12 w-full z-40 mx-auto">
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
         max-xs:hidden items-center w-fit space-x-5 text-base tracking-widest"
        >
          <motion.div
            className="flex top-0 bottom-0 h-full justify-center text-gray-400 dark:text-[#aaa] font-medium
         max-md:hidden items-center w-fit space-x-6 text-base tracking-widest"
          >
            <Link
              href="/"
              className={`tracking-wide hover:text-blue dark:hover:text-yellow-400  ${
                router.pathname === "/"
                  ? "font-bold text-blue dark:text-yellow-400"
                  : ""
              }`}
            >
              <p>Work</p>
            </Link>
            <Link
              href="/about"
              className={`tracking-wide hover:text-blue  dark:hover:text-yellow-400  ${
                router.pathname === "/about"
                  ? "font-bold text-blue dark:text-yellow-400"
                  : ""
              }`}
            >
              <p>About</p>
            </Link>
            <Link
              href="/contact"
              className={`tracking-wide hover:text-blue dark:hover:text-yellow-400 ${
                router.pathname === "/contact"
                  ? "font-bold text-blue dark:text-yellow-400"
                  : ""
              }`}
            >
              <p>Contact</p>
            </Link>
          </motion.div>
          {/* <Link
            target="_blank"
            href="https://www.linkedin.com/in/pedro-felippe/"
            className={`tracking-wide hover:text-blue`}
          >
            <Linkedin />
          </Link>
          <Link
            target="_blank"
            href="https://github.com/pefelippe"
            className={`tracking-wide hover:text-blue`}
          >
            <GithubIcon />
          </Link> */}
          <motion.div
            className="flex  h-full justify-center  rounded-t-xl 
            items-center w-fit  space-x-4 lg:justify-between "
          >
            <AnimatedBtn>
              <ModeToggle />
            </AnimatedBtn>
          </motion.div>
        </motion.div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
