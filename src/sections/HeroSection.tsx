/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import {
  ArrowDown,
  GithubIcon,
  Linkedin,
  MoveDown,
  MoveDownIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";

import { Button } from "../components/ui/button";

function HeroSection() {
  return (
    <motion.div className="relative justify-center gap-5 flex flex-col w-full text-center items-center min-h-screen">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="firstTitle text-[#302f33] "
      >
        <Typewriter
          words={["Pedro Felippe.", "Web Developer.", "Don't Overthink it."]}
          loop={0}
          cursor
          cursorStyle=""
          typeSpeed={50}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </motion.p>

      {/* <Button
        variant="ghost"
        className=" absolute bottom-6 flex gap-1  bg-[#101010] text-white rounded"
      >
        <ScrollLink
          smooth={true}
          to="projectsSection"
          className="flex font-bold items-center gap-1 tracking-wide 
          "
        >
          Selected Works <ArrowDown className="h-6 w-6" />
        </ScrollLink>
      </Button> */}
    </motion.div>
  );
}

export default HeroSection;
