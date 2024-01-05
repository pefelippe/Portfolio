import { motion } from "framer-motion";
import Image from "next/image";

import { technologies } from "../constants";

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 75 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75 }}
      className=" text-xl  font-thin flex flex-col w-full  items-start max-xl:items-center  "
    >
      <div className="grid grid-cols-8 w-full ">
        {technologies.map((tech) => {
          return (
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
              key={tech.name}
              className="flex flex-col items-center w-full "
            >
              <Image width={50} height={50} src={tech.imgUrl} alt={tech.name} />
              <p className="text-md font-medium">{tech.name}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Skills;
