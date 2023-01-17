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
      className="flex flex-col justify-center items-center text-center max-w-full cursor-pointer rounded-lg
       border hover:bg-[#5865f2] transition-all ease-in-out p-4 px-8 space-y-2 "
    >
      <div>{children}</div>
      <h2 className="text-base  md:text-md xl:text-xl font-semibold">
        {title}
      </h2>
    </motion.a>
  );
};

export default SkillBox;
