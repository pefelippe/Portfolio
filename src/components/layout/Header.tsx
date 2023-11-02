import { motion } from "framer-motion";

import Link from "next/link";
import { useRouter } from "next/router";
import AnimateLink from "../animated/AnimatedLink";

const Navbar = () => {
  const router = useRouter();

  return (
    <motion.header
      className="w-full mx-auto top-0 left-0 right-0 max-w-5xl
      text-white h-[15vh] items-center  flex max-xl:px-6 text-base font-normal justify-between  "
    >
      <Link
        href="/"
        className=" font-bold  text-2xl uppercase flex  items-center tracking-[1px] hover:text-gray-300 leading-[1.2]"
      >
        Pedro Felippe
      </Link>

      <div className="flex items-center text-lg font-normal tracking-[3px] text-gray-100 transition-all">
        <AnimateLink
          href="/"
          className={`p-3 px-6 ${
            router.pathname === "/" ? "bg-[#1d1b22] text-white" : ""
          } rounded-md hover:text-white`}
        >
          <p>Home</p>
        </AnimateLink>
        <AnimateLink
          href="/blog"
          className={`p-3 px-6 ${
            router.pathname === "/blog" ? "bg-[#1d1b22] text-white" : ""
          } rounded-md hover:text-white`}
        >
          <p>Blog</p>
        </AnimateLink>
        <AnimateLink
          href="/contact"
          className={`p-3 px-6 ${
            router.pathname === "/contact" ? "bg-[#1d1b22] text-white" : ""
          } rounded-md hover:text-white`}
        >
          <p>Contact</p>
        </AnimateLink>
      </div>
    </motion.header>
  );
};

export default Navbar;
