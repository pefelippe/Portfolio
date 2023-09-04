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
      className=" text-xl  font-thin max-w-sm mx-auto
      flex flex-col  items-center w-full "
    >
      <div className="grid w-full grid-cols-8 gap-4 justify-between ">
        {technologies.map((tech) => {
          return (
            <div key={tech.name} className=" ">
              <Image width={35} height={35} src={tech.imgUrl} alt={tech.name} />
              {/* <span className="font-semibold">{tech.name}</span> */}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Skills;
