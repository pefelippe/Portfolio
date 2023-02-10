import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import ContentTitle from "../atoms/ContentTitle";

type Props = {};

function LetsTalk({}: Props) {
  return (
    <motion.div>
      <ContentTitle title="Vamos nessa?" />

      <Link
        href="/Contact"
        target=""
        className="px-10  text-center text-xl  font-semibold rounded-xl p-5 transition-all bg-[#5865f2]/80 hover:bg-[#5865f2]"
      >
        Vamos Conversar!
      </Link>
    </motion.div>
  );
}

export default LetsTalk;
