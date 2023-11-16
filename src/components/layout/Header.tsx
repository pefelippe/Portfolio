import { motion } from "framer-motion";
import { useRouter } from "next/router";

import Links from "../Links";

const Navbar = () => {
  const router = useRouter();

  return (
    <motion.header
      className="w-full  bottom-0 left-0 right-0  z-20 absolute  h-[10vh]   shadow-xs shadow-gray-300
    items-center  flex mx-auto  text-base font-normal justify-center"
    >
      <Links />
    </motion.header>
  );
};

export default Navbar;
