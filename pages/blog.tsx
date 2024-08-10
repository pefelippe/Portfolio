/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { GithubIcon, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      className="flex items-center justify-center w-full h-full mx-auto max-lg:flex-col mt-[10vh] divide-x"
    >
      <motion.div className="w-full h-full min-h-[60vh] bg-zinc-900 items-center justify-center text-zinc-50 flex flex-col gap-3">
        <h1 className="tracking-tighter text-7xl text-bold u">blog.</h1>
        <p className="text-xl tracking-wide text-zinc-200">
          front-end, algoritms and data structures and open source
        </p>
      </motion.div>
    </motion.div>
  );
}

export default AboutSection;
