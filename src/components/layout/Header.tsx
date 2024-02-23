import { motion } from "framer-motion";

import Link from "next/link";
import { ModeToggle } from "../ui/mode-toggle";
import { useRouter } from "next/router";
import AnimatedBtn from "../animated/AnimatedBtn";
import { LinkedinIcon } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Logo = () => {
  return (
    <button className=" flex text-xl  transition-all w-fit  tracking-tighter font-semibold hover:text-blue ">
      Pedro Felippe
    </button>
  );
};

const Header = () => {
  const router = useRouter();

  const isActive = (path: string) =>
    path === router.pathname ? "text-blue font-medium" : "";

  return (
    <motion.header className="fixed flex h-24 w-full bg-white  z-50 px-6 lg:px-20 dark:bg-[#121212] dark:text-white">
      <motion.nav
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="flex w-full mx-auto items-center justify-between  max-sm:max-w-lg "
      >
        <Link href="/">
          <Logo />
        </Link>

        <motion.div
          className=" flex top-0 bottom-0 h-full justify-center tracking-wide  text-[#333] dark:text-[#aaa]	 font-light
            items-center w-fit space-x-6 text-base"
        >
          {/* <Link
            href="/"
            className={`tracking-wide hover:text-blue ${isActive("/")}`}
          >
            <p>Work</p>
          </Link>
          <Link
            href="/about"
            className={`tracking-wide hover:text-blue ${isActive("/about")}`}
          >
            <p>About</p>
          </Link>
          <Link
            href="/contact"
            className={`tracking-wide hover:text-blue ${isActive("/contact")}`}
          >
            <p>Contact</p>
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
