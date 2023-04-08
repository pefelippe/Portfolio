import { motion } from "framer-motion";
import React from "react";

interface ISkillBox {
  title: string;
  description?: string;
  children?: JSX.Element;
}

const SkillBox = ({ title, description, children }: ISkillBox) => {
  return (
    <motion.a
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.1 },
      }}
      className="flex flex-col justify-center items-center text-center mx-auto w-full rounded-md
       transition-all ease-in-out space-y-3  max-w-[100px] 
       text-white "
    >
      <div className="group">
        <div className="">{children}</div>
        <span className="z-50 absolute top-20 right-0 left-0 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 w-[90px] gap-2">
          <p className="font-medium pb-2 text-normal">{title}</p>
          <p>{description}</p>
        </span>
      </div>
    </motion.a>
  );
};

export default SkillBox;
