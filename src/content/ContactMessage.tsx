import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

type Props = {};

function Message({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: 1 }}
      className="py-10"
    >
      <div className="contentStyle t justify-center items-center gap-6 w-fit">
        <h1 className="text-3xl font-semibold justify-center md:justify-start">
          Pronto para começar uma parceria?
        </h1>

        <button className="justify-center md:justify-start text-2xl font-semibold rounded-full px-8 py-4 cursor-pointer transition-all bg-[#3f4de9] hover:bg-[#323fd3] hover:underline">
          <Link href="/contact">Vamos conversar</Link>
        </button>
      </div>
    </motion.div>
  );
}

export default Message;
