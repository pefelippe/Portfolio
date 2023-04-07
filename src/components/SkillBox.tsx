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
      className="flex flex-col justify-center items-center text-center mx-auto w-full rounded-md
       transition-all ease-in-out space-y-3  max-w-[100px]
       text-white hover:text-[#5865f2]  
        hover:border-[#5865f2]  "
    >
      <div className="">{children}</div>
    </motion.a>
  );
};

export default SkillBox;
