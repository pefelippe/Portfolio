import { motion } from "framer-motion";
import { GithubIcon, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

import { Button } from "../components/ui/button";

function HeroSection() {
  return (
    <motion.div className="justify-center gap-5 flex flex-col w-full min-h-[60vh] text-center items-center">
      {/* <motion.img
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        src="/assets/avatar.png"
        className=" max-h-[220px] max-w-xl "
      /> */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.5 }}
        className="firstTitle"
      >
        Pedro Felippe
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.75 }}
        className="secondTitle"
      >
        <Typewriter
          words={["Developer", "Coffe Lover", "Tech Enthusiast"]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </motion.p>

      {/* <Button className="w-fit py-7 px-12 text-lg rounded-md mt-12 text-white">
        <ScrollLink to="projects-container" offset={-150}>
          Projects
        </ScrollLink>
      </Button> */}
    </motion.div>
  );
}

export default HeroSection;
