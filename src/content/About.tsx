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
      className="content-intern gap-8 "
    >
      <motion.div className="h-full flex flex-col items-start justify-start w-full z-20 gap-4">
        <h3 className="section-subtitle  max-w-6xl">
          About <span className="text-blue">Me</span>
        </h3>
        <div
          className="flex flex-col lg:grid lg:grid-cols-2 rounded-md gap-8
         w-full items-start min-h-fit"
        >
          <span className="w-full">oi</span>
          <motion.img
            src="./assets/pedrof.jpg"
            className="rounded-2xl border"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
