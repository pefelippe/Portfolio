import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

import AnimatedBtn from "../animated/AnimatedBtn";
import { ModeToggle } from "../ui/mode-toggle";

export const Logo = () => {
  return (
    <button className=" flex text-xl  transition-all w-fit  tracking-tighter font-extrabold hover:text-blue ">
      PP
    </button>
  );
};

const Header = () => {
  const router = useRouter();

  const isActive = (path: string) =>
    path === router.pathname ? "text-blue font-medium" : "";

  return (
    <motion.header className=" flex h-[10vh] w-full z-40">
      <motion.nav
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className=" flex w-full mx-auto items-center justify-between  max-sm:max-w-lg  px-6 lg:px-10 "
      >
        <Link href="/">
          <Logo />
        </Link>

        <motion.div
          className=" flex top-0 bottom-0 h-full justify-center   text-[#333] dark:text-[#aaa]	 font-light
            items-center w-fit space-x-6 text-sm lowercase tracking-widest"
        >
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/pedro-felippe/"
            className={`tracking-wide  hover:text-blue}`}
          >
            <p>Linkedin</p>
          </Link>
          <Link
            target="_blank"
            href="https://github.com/pefelippe"
            className={`tracking-wide  hover:text-blue`}
          >
            <p>Github</p>
          </Link>
          <Link
            href="mailto:pedfelippe@gmail.com"
            className={`tracking-wide hover:text-blue`}
          >
            <p>Email</p>
          </Link>
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
