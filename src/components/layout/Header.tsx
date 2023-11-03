import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

import AnimateLink from "../animated/AnimatedLink";

const Navbar = () => {
  const router = useRouter();

  return (
    <motion.header
      className="w-full  top-0 left-0 right-0  bg-[#080808] py-6
      text-white"
    >
      <div className="  max-w-5xl flex items-center mx-auto max-xl:px-6 text-base font-normal justify-between">
        <Link
          href="/"
          className=" flex items-center justify-center gap-2 font-bold hover:text-gray-300 text-xl tracking-[1px]"
        >
          pedrofelippe
        </Link>

        <div className="flex items-center text-lg font-medium text-gray-100 transition-all space-x-2">
          <AnimateLink
            href="/"
            className={`p-2 px-6 ${
              router.pathname === "/" ? "bg-blue text-white" : ""
            } rounded-md hover:text-white`}
          >
            <p>Home</p>
          </AnimateLink>
          <AnimateLink
            href="/blog"
            className={`p-2 px-6 ${
              router.pathname === "/blog" ? "bg-blue text-white" : ""
            } rounded-md hover:text-white`}
          >
            <p>Posts</p>
          </AnimateLink>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
