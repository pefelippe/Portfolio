/* eslint-disable react/no-unescaped-entities */
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { File, LinkedinIcon } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

import AnimatedBtn from "../components/animated/AnimatedBtn";
import { Button } from "../components/ui/button";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="hero-container"
      className=" content-intern relative w-full flex flex-col justify-center 
       items-start text-start my-auto gap-6 max-w-6xl mx-auto "
    >
      <motion.div className="h-full flex flex-col items-start justify-start w-fit z-20 gap-4">
        <motion.h1 className="text-7xl  lg:text-8xl uppercase font-extrabold text-blue  ">
          Pedro Felippe
        </motion.h1>
        <motion.h3 className="text-2xl lg:text-3xl  font-thin  text-gray-700    dark:text-[#efefef]">
          Fixing complex problems with simple solutions.
        </motion.h3>
      </motion.div>
    </motion.div>
  );
}
