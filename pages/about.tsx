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
      className="flex flex-col  space-y-20  h-fit min-h-screen  w-screen
      mx-auto text-xl text-[#000] mt-[15vh]"
    >
      {/* <Experience /> */}
      <section className=" text-white bg-[#202020] px-10">
        <Skills />
      </section>
    </motion.div>
  );
}

export default AboutPage;
