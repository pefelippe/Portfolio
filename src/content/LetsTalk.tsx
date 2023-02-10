import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import ContentTitle from "../atoms/ContentTitle";

type Props = {};

function LetsTalk({}: Props) {
  return (
    <motion.div>
      <ContentTitle title="E agora?" />
      <div className="flex gap-8">
        <Link
          href="/Contact"
          target=""
          className="px-6  text-center text-xl  font-semibold rounded-xl p-5 transition-all  hover:underline"
        >
          Quem sou?
        </Link>

        <Link
          href="/Contact"
          target=""
          className="px-6 text-center text-xl  font-semibold rounded-xl p-5 transition-all bg-[#5865f2]/80  hover:underline hover:bg-[#5865f2]"
        >
          Entre em contato
        </Link>
      </div>
    </motion.div>
  );
}

export default LetsTalk;
