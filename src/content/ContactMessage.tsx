import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

import ContentTitle from "../atoms/ContentTitle";
import AnimatedBtn from "../components/motion/AnimatedBtn";

type Props = {};

function Message({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className="py-10"
    >
      <div className="contentStyle  max-w-4xl justify-center items-center gap-6 w-fit">
        <ContentTitle title="Pronto para começar uma parceria?" />

        <button className="justify-center md:justify-start text-2xl font-semibold rounded-full px-8 py-4 cursor-pointer transition-all bg-[#3b47ca] hover:bg-[#3b47ca] hover:underline">
          <Link href="/contact">Vamos conversar</Link>
        </button>
      </div>
    </motion.div>
  );
}

export default Message;
