import { motion } from "framer-motion";
import Image from "next/image";

import { technologies } from "../constants";

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -75 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75 }}
      className=" text-xl  font-thin 
      flex flex-col  items-start w-full  gap-4"
    >
      <h1 className="text-white text-2xl font-normal ">Skills</h1>

      <div className="grid w-full grid-cols-8 gap-3  ">
        {technologies.map((tech) => {
          return (
            <div key={tech.name} className="flex flex-col items-center w-fit">
              <Image width={50} height={50} src={tech.imgUrl} alt={tech.name} />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Skills;
