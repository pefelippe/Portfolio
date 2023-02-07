import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import ContentTitle from "../atoms/ContentTitle";
import AnimatedBtn from "../components/motion/AnimatedBtn";

type Props = {};

function Message({}: Props) {
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

export default Message;
