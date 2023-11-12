import { motion } from "framer-motion";
import { useRouter } from "next/router";

import AnimateLink from "../animated/AnimatedLink";

const Navbar = () => {
  const router = useRouter();

  return (
    <motion.header className="w-full  top-0 left-0 right-0   bg-[#080808]  z-20  shadow shadow-gray-300 text-gray-300">
      <div className="h-[10vh]  text-lg  max-w-5xl  mx-auto flex items-center  max-xl:px-6  font-light justify-between ">
        <AnimateLink href="/" className="">
          <p className="text-2xl font-light ">Pedro Felippe</p>
        </AnimateLink>
      </div>
    </motion.header>
  );
};

export default Navbar;
