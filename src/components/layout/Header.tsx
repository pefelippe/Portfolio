import { motion } from "framer-motion";
import { useRouter } from "next/router";

import AnimateLink from "../animated/AnimatedLink";

const Navbar = () => {
  const router = useRouter();

  return (
    <motion.header
      className="w-full  top-0 left-0 right-0  z-20  text-white h-[10vh]   shadow-xs shadow-gray-300
    items-center  flex mx-auto  text-base font-normal justify-center"
    >
      <div className=" text-lg  max-w-5xl  mx-auto flex items-center  max-xl:px-6  font-light justify-between px-6 ">
        <AnimateLink href="/" className="">
          <p className="text-2xl font-medium ">Pedro Felippe</p>
        </AnimateLink>
      </div>
    </motion.header>
  );
};

export default Navbar;
