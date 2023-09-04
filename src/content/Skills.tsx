import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import { technologies } from "../constants";

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -75 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75 }}
      className=" text-xl w-full  mx-auto  gap-3 pt-5
      flex flex-col justify-center  items-start  "
    >
      <div className="gap-2 grid w-full grid-cols-2 md:grid-cols-4 xl:grid-cols-6 ">
        {technologies.map((tech) => {
          return (
            <div
              key={tech.name}
              className="text-sm gap-1 flex justify-center items-center  text-black rounded-md flex-col py-2"
            >
              <Image width={40} height={40} src={tech.imgUrl} alt={tech.name} />
              <span className="font-semibold">{tech.name}</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Skills;
