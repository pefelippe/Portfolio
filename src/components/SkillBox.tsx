import { motion } from "framer-motion";
import React from "react";

interface ISkillBox {
  title: string;
  description?: string;
  children?: JSX.Element;
}

const SkillBox = ({ children }: ISkillBox) => {
  return (
    <motion.a
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.1 },
      }}
      className="flex flex-col justify-center items-center text-center mx-auto w-fit rounded-md text-white bg-gray-850"
    >
      <div className="group">
        <div className="z-50  ">{children}</div>
      </div>
    </motion.a>
  );
};

export default SkillBox;
