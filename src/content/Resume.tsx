/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";
import AnimatedBtn from "../components/animated/AnimatedBtn";
import { FaFilePdf } from "react-icons/fa";

export default function Resume() {
  return (
    <motion.div className="w-full justify-center items-center flex flex-col">
      <a
        // open a new tab
        target="_blank"
        href="https://docs.google.com/document/d/1xl45doLPK-BEZ-yLpfr7KnODSTqEJWweH2MzCqTf1S0/edit"
        className="w-fit border-gray-850 hover:border-white flex gap-2 items-center px-10 py-4 rounded bg-gray-850
          font-semibold transition-opacity  text-white  text-xl hover:underline"
        rel="noreferrer"
      >
        <p>View resume</p>
      </a>
    </motion.div>
  );
}
