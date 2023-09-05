import { motion } from "framer-motion";
import Link from "next/link";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

import BlogPosts from "../src/components/BlogPosts";
import About from "../src/content/About";
import Skills from "../src/content/Skills";
import Contact from "./contact";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" flex flex-col justify-center items-center text-center mx-auto px-6 gap-20  min-h-[80vh] "
    >
      <About />

      {/* <Skills /> */}
      {/* <BlogPosts /> */}
      {/* <Contact /> */}
    </motion.div>
  );
}
