import { motion } from "framer-motion";
import React from "react";
import {
  SiAmazonaws,
  SiDocker,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import Experience from "../src/content/Experience";
import Skills from "../src/content/Skills";

type Props = {};

function AboutPage({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col py-20 space-y-20  h-fit  
      mx-auto max-w-7xl text-xl text-[#000] w-full"
    >
      {/* <Experience /> */}
      <section className="rounded-xl text-white bg-[#202020] px-10">
        <Skills />
      </section>
    </motion.div>
  );
}

export default AboutPage;
