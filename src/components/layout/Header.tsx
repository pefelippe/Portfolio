import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import AnimatedBtn from "../animated/AnimatedBtn";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="flex w-full fixed rounded-sm bg-white z-40 h-18 py-4 left-0 right-0 border-b "
    >
      <div className="flex w-full  mx-auto items-center justify-between max-xl:px-6 max-w-7xl">
        <Link href="/">
          <p className="text-2xl font-bold tracking-tighter">pedro.felippe</p>
        </Link>

        <motion.div
          className="flex gap-6 items-center">
            <AnimatedBtn target="_blank" href="https://www.linkedin.com/in/pedro-felippe/">
              <FaLinkedin className="h-9 w-9 hover:text-blue"/>
            </AnimatedBtn>

            <AnimatedBtn  href="https://github.com/pefelippe">
              <FaGithub className="h-9 w-9 hover:text-blue"/>
            </AnimatedBtn>
        </motion.div>
      </div>
   
    </motion.header>
  );
};

export default Header;
