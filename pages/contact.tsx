import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";

import ContentTitle from "../src/atoms/ContentTitle";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.75 }}
      className="contentStyle py-20 "
    >
      <ContentTitle title="Contato" />

      <div className="w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center scrollbar-hide">
        <Image width="700" height="600" src="/assets/banner.png" alt="img" />
      </div>
    </motion.div>
  );
}

export default About;
