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
        scale: 1.3,
        transition: { duration: 0.1 },
      }}
      className="flex flex-col justify-center items-center text-center cursor-pointer
       transition-all ease-in-out space-y-3  w-fit min-w-[100px] h-full min-h-[100px] rounded-full "
    >
      <div>{children}</div>
      <h2 className="tracking-tight  font-semibold">{title}</h2>
    </motion.a>
  );
};

export default SkillBox;
