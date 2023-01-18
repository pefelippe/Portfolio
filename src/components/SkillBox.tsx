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
      className="flex flex-col justify-center items-center text-center cursor-pointer
       transition-all ease-in-out p-4 space-y-2  w-fit min-w-[100px] h-full min-h-[100px] rounded-full"
    >
      <div>{children}</div>
      <h2 className="">{title}</h2>
    </motion.a>
  );
};

export default SkillBox;
