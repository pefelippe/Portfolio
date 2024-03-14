/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { GithubIcon, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

import { Button } from "../components/ui/button";

function HeroSection() {
  return (
    <motion.div className="justify-center gap-5 flex flex-col w-full text-center items-center min-h-screen">
      {/* <motion.img
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        src="/assets/avatar-pdr.png"
        className=" max-h-[220px] max-w-xl rounded-full border-4 border-gray-300"
      /> */}

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        className="secondTitle text-7xl"
      >
        <Typewriter
          words={["Pedro Felippe.", "Web Developer.", "Be simple."]}
          loop={0}
          cursor
          cursorStyle=""
          typeSpeed={50}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </motion.p>
      {/* <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.5 }}
        className="firstTitle"
      >
        Hi! I'm Pedro Felippe.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.75 }}
        className="secondTitle max-w-2xl"
      >
        An experienced leader andversatile product designer living in Brazil.
      </motion.p> */}

      {/* <Button className="w-fit py-7 px-12 text-lg rounded-md mt-12 text-white">
        <ScrollLink to="projects-container" offset={-150}>
          Projects
        </ScrollLink>
      </Button> */}
    </motion.div>
  );
}

export default HeroSection;
