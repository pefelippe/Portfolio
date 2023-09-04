import { motion } from "framer-motion";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

import AnimatedBtn from "../src/components/animated/AnimatedBtn";
import BlogPosts from "../src/components/BlogPosts";
import About from "../src/content/About";
import Skills from "../src/content/Skills";
import Contact from "./contact";

export default function Home() {
  return (
    <motion.div className=" flex flex-col text-center max-w-xl mx-auto px-8 gap-4 py-20">
      <About />
      <Skills />
      <BlogPosts />
    </motion.div>
  );
}
