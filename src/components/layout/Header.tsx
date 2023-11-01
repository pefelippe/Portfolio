import { motion } from "framer-motion";
import Link from "next/link";

import AnimateLink from "../animated/AnimatedLink";

const Navbar = () => {
  return (
    <motion.header
      className="w-full mx-auto top-0 left-0 right-0 max-w-5xl
      text-white h-[10vh] items-center  flex max-xl:px-6 text-base font-normal justify-between  "
    >
      <Link
        href="/"
        className="font-bold text-2xl uppercase flex  items-center tracking-[4px] hover:text-gray-300"
      >
        Pedro Felippe
      </Link>

      <div className="flex gap-4 items-center text-md font-medium tracking-[3px]">
        <AnimateLink
          href="/blog"
          className=" p-2  uppercase hover:text-gray-300 hover:underline"
        >
          <p>Blog</p>
        </AnimateLink>
        <AnimateLink
          href="/contact"
          className=" px-6 rounded-md py-3  uppercase bg-blue hover:bg-blue/80 hover:underline"
        >
          <p>Contact</p>
        </AnimateLink>
      </div>
    </motion.header>
  );
};

export default Navbar;
