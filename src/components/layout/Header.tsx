import { motion } from "framer-motion";

import Link from "next/link";
import { ModeToggle } from "../ui/mode-toggle";

export const Logo = () => {
  return (
    <button className=" flex text-xl  transition-all w-fit  tracking-tighter font-semibold hover:text-blue ">
      Pedro Felippe
    </button>
  );
};

const Header = () => {
  return (
    <motion.header className="fixed flex h-24 w-full  z-50 px-6 bg-white dark:bg-gray-900 dark:text-white">
      <motion.nav
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="flex w-full mx-auto items-center justify-between px-6 max-sm:max-w-lg "
      >
        <Link href="/">
          <Logo />
        </Link>

        <motion.div
          className=" flex top-0 bottom-0 h-full justify-center tracking-wide  text-[#333] dark:text-[#aaa]	 font-light
            items-center w-fit space-x-4 text-base"
        >
          <Link href="/about" className=" tracking-wide  hover:text-blue  ">
            About
          </Link>
          <Link href="/contact" className="tracking-wide  hover:text-blue  ">
            Contact
          </Link>
          <ModeToggle />
        </motion.div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
