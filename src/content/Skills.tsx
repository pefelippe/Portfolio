import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import SkillBox from "../components/SkillBox";
import { technologies } from "../constants";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      className="h-fit max-w-4xl mx-auto max-xl:px-8 text-xl  rounded-md 
      flex max-lg:flex-col justify-start gap-10 lg:gap-20  items-center "
    >
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="gap-10 grid w-fit grid-cols-4 md:grid-cols-6  mx-auto"
      >
        {technologies.map((tech) => {
          return (
            <SkillBox
              title={tech.name}
              description={tech.description}
              key={tech.name}
            >
              <Image width={90} height={90} src={tech.imgUrl} alt={tech.name} />
            </SkillBox>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default Skills;
