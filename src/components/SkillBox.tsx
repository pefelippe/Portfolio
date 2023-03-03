import { motion } from "framer-motion";
import React from "react";

interface ISkillBox {
  title: string;
  children?: JSX.Element;
}

const SkillBox = ({ title, children }: ISkillBox) => {
  return (
    <motion.a
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.1 },
      }}
      className="flex flex-col justify-center items-center text-center mx-auto w-full
       transition-all ease-in-out space-y-3  border-2 hover:text-[#5865f2]  border-[#242424] hover:border-[#5865f2]  bg-[#121212] p-5 rounded-md"
    >
      <div>{children}</div>
      <div className="font-semibold text-xl">{title}</div>
    </motion.a>
  );
};

export default SkillBox;
