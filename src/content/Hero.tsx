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
      className="content-intern relative w-full items-center 
    text-center gap-4  mx-auto"
    >
      {/* <motion.img
        src="./assets/avatar-pdr.png"
        className="rounded-full  shadow max-w-[120px] "
      /> */}
      <motion.div className="flex flex-col  font-extrabold max-w-5xl">
        <p className="text-4xl lg:text-6xl lg:tracking-tight leading-tight">
          I am Pedro Felippe — Frontend Developer based in Brazil.
        </p>
        <p className="text-xl lg:text-2xl tracking-tight font-extralight py-4">
          I create simple solutions for complex problems.
        </p>
      </motion.div>
    </motion.div>
  );
}
