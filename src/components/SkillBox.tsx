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
        scale: 1.2,
        transition: { duration: 0.1 },
      }}
      className="flex flex-col justify-center items-center text-center mx-auto
       transition-all ease-in-out space-y-3 w-[90px] h-[90px] hover:bg-[#5865f2] rounded-lg"
    >
      <div>{children}</div>
      <h2 className="tracking-tight  font-semibold">{title}</h2>
    </motion.a>
  );
};

export default SkillBox;
