import { motion } from "framer-motion";
import React from "react";

import About from "../src/content/About";
import Experience from "../src/content/Experience";
import Skills from "../src/content/Skills";

type Props = {};

function Details({}: Props) {
  return (
    <motion.div className="min-h-screen flex flex-col justify-center items-center space-y-20 pt-40">
      <About />
      <Skills/>
      {/* <Experience /> */}
    </motion.div>
  );
}

export default Details;
