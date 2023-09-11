/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";
import Links from "../components/Links";

export default function About() {
  return (
    <motion.div
      className="relative items-start text-center leading-none  justify-start
    flex flex-col gap-4 max-md:max-w-md"
    >
      <p className="text-7xl uppercase font-bold text-blue">
        FULL-STACK DEVELOPER
      </p>
      <p className="text-2xl font-extralight text-gray-100 leading-[1.2]">
        Hey! My name is Pedro Felippe and i'm a passionate software engineer.
      </p>
      <Links />
    </motion.div>
  );
}
