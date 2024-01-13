/* eslint-disable react/no-unescaped-entities */
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { File, LinkedinIcon } from "lucide-react";

import AnimatedBtn from "../components/animated/AnimatedBtn";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="hero-container"
      className=" content-intern relative w-full flex flex-col justify-center
       items-center text-center my-auto gap-6 max-w-6xl mx-auto "
    >
      <motion.div className="h-full flex flex-col items-center justify-center w-fit z-20 gap-4">
        {/* <h3 className="text-2xl lg:text-3xl  font-thin ">Hey,</h3> */}

        <motion.h1 className="text-6xl  lg:text-8xl uppercase font-extrabold text-blue  dark:text-[#fffdd0]">
          Pedro Felippe
        </motion.h1>

        <motion.h3 className="text-2xl lg:text-3xl  font-thin  text-gray-700    dark:text-[#efefef]">
          Fixing complex problems with simple solutions.
        </motion.h3>
      </motion.div>

      {/* <motion.img
        src="assets/avatar-pdr.png"
        alt="pedrofelippe"
        className="flex-shrink-1 object-cover relative w-full max-lg:hidden   lg:max-w-[390px] rounded-full  "
      /> */}
    </motion.div>
  );
}
