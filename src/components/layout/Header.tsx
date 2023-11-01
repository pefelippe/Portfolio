import { motion } from "framer-motion";
import Link from "next/link";

import AnimateLink from "../animated/AnimatedLink";

const Navbar = () => {
  return (
    <motion.header
      className="   w-full mx-auto top-0 left-0 right-0 max-w-5xl
      text-white h-[10vh] items-center  flex max-xl:px-6 text-base font-normal justify-between  "
    >
      <Link
        href="/"
        className="font-bold text-xl uppercase flex  items-center tracking-[4px]"
      >
        Pedro Felippe
      </Link>

      <div className="flex gap-4 items-center">
        <AnimateLink
          href="/blog"
          className="font-semibold text-md px-2 py-2 tracking-[4px] uppercase hover:text-gray-300"
        >
          <p>Blog</p>
        </AnimateLink>
        <AnimateLink
          href="/contact"
          className="font-semibold text-md px-2 py-2 tracking-[4px] uppercase hover:text-gray-300"
        >
          <p>Contact</p>
        </AnimateLink>

        {/* <AnimatedBtn
            href="https://github.com/pefelippe"
            className="font-semibold text-md px-2 py-2 tracking-[4px] uppercase hover:text-gray-300"
          >
            <p>Github</p>
          </AnimatedBtn>

          <AnimatedBtn
            href="https://www.linkedin.com/in/pedro-felippe/"
            className="font-semibold text-md  px-2 py-2 tracking-[4px] uppercase hover:text-gray-300"
          >
            <p>Linkedin</p>
          </AnimatedBtn> */}
      </div>
    </motion.header>
  );
};

export default Navbar;
