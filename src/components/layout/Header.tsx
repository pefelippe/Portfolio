import { motion } from "framer-motion";
import { useRouter } from "next/router";

import AnimateLink from "../animated/AnimatedLink";

const Navbar = () => {
  const router = useRouter();

  return (
    <motion.header className="w-full  top-0 left-0 right-0  bg-[#080808]  absolute z-20 text-white">
      <div className="h-[10vh]  max-w-5xl  mx-auto flex items-center  max-xl:px-6 text-base font-light justify-center ">
        <div className="flex items-start lg:items-center text-base font-medium text-gray-100 transition-all space-x-3">
          <AnimateLink
            href="/"
            className={`p-3 px-9 ${
              router.pathname === "/"
                ? "bg-blue text-white  hover:no-underline"
                : ""
            } rounded-full hover:text-white hover:underline`}
          >
            <p>Home</p>
          </AnimateLink>

          <AnimateLink
            href="/about"
            className={`p-3 px-9  ${
              router.pathname === "/about"
                ? "bg-blue text-white hover:no-underline"
                : ""
            } rounded-full hover:text-white  hover:underline`}
          >
            <p>About</p>
          </AnimateLink>
          <AnimateLink
            href="/contact"
            className={`p-3 px-9  ${
              router.pathname === "/contact"
                ? "bg-blue text-white hover:no-underline"
                : ""
            } rounded-full hover:text-white  hover:underline`}
          >
            <p>Contact</p>
          </AnimateLink>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
