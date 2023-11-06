import { motion } from "framer-motion";
import { useRouter } from "next/router";

import AnimateLink from "../animated/AnimatedLink";

const Navbar = () => {
  const router = useRouter();

  return (
    <motion.header className="w-full  top-0 left-0 right-0  bg-[#080808]  absolute z-20 text-white ">
      <div className="h-[10vh] text-lg  max-w-5xl  mx-auto flex items-center  max-xl:px-6  font-light justify-between ">
        <AnimateLink href="/" className="">
          <p className="text-xl font-medium">Pedro Felippe</p>
        </AnimateLink>
        <div
          className="flex items-center 
         font-medium text-gray-100 transition-all  space-x-8 "
        >
          <AnimateLink
            href="/"
            className={`  ${
              router.pathname === "/"
                ? " text-white  underline underline-offset-8 decoration-blue"
                : ""
            } rounded-full hover:text-white hover:underline`}
          >
            <p>Home</p>
          </AnimateLink>

          <AnimateLink
            href="/about"
            className={`  ${
              router.pathname === "/about"
                ? " text-white  underline underline-offset-8 decoration-blue"
                : ""
            } rounded-full hover:text-white  hover:underline`}
          >
            <p>About</p>
          </AnimateLink>
          <AnimateLink
            href="/contact"
            className={`  ${
              router.pathname === "/contact"
                ? " text-white  underline underline-offset-8 decoration-blue"
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
