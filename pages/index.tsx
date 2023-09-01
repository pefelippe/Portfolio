/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";

import AnimatedBtn from "../src/components/animated/AnimatedBtn";
import About from "../src/content/About";
import Resume from "../src/content/Resume";
import Skills from "../src/content/Skills";
import Contact from "./contact";
import Projects from "./projects";

export default function Home() {
  return (
    <motion.div className=" flex flex-col text-center">
      <About />
    </motion.div>
  );
}
