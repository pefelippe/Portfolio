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
      className=" text-xl  font-thin mx-auto
      flex flex-col  items-center w-full "
    >
      <div className="grid w-full grid-cols-4 gap-10 max-w-xl ">
        {technologies.map((tech) => {
          return (
            <div key={tech.name} className="flex flex-col items-center gap-2 ">
              <Image width={50} height={50} src={tech.imgUrl} alt={tech.name} />
              <span className="font-semibold">{tech.name}</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Skills;
