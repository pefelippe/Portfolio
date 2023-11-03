import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

import AnimateLink from "../animated/AnimatedLink";

const Navbar = () => {
  const router = useRouter();

  return (
    <motion.header
      className="w-full  top-0 left-0 right-0  bg-[#121212]
      text-white"
    >
      <div className="h-[10vh]  max-w-5xl  max-lg:max-w-xl mx-auto flex items-center  max-xl:px-6 text-base font-normal justify-between">
        <Link
          href="/"
          className=" flex items-center justify-center gap-2 font-bold hover:text-gray-300 text-lg tracking-[1px]"
        >
          pedrofelippe
        </Link>

        <div className="flex items-center text-lg font-medium text-gray-100 transition-all space-x-2">
          <AnimateLink
            href="/"
            className={`p-2 px-6 ${
              router.pathname === "/" ? "bg-[#202020] text-white" : ""
            } rounded-md hover:text-white`}
          >
            <p>Home</p>
          </AnimateLink>
          <AnimateLink
            href="/about"
            className={`p-2 px-6 ${
              router.pathname === "/about" ? "bg-[#202020] text-white" : ""
            } rounded-md hover:text-white`}
          >
            <p>About</p>
          </AnimateLink>
          <AnimateLink
            href="/projects"
            className={`p-2 px-6 ${
              router.pathname === "/projects" ? "bg-[#202020] text-white" : ""
            } rounded-md hover:text-white`}
          >
            <p>Projects</p>
          </AnimateLink>
          <AnimateLink
            href="/contact"
            className={`p-2 px-6 ${
              router.pathname === "/contact" ? "bg-[#202020] text-white" : ""
            } rounded-md hover:text-white`}
          >
            <p>Contact</p>
          </AnimateLink>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
