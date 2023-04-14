import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import SkillBox from "../components/SkillBox";
import { technologies } from "../constants";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      className="h-fit min-h-[60vh]  max-w-7xl mx-auto   text-xl max-lg:px-8 rounded-md 
      flex max-lg:flex-col justify-between gap-10 md:gap-20  items-center text-center p-10 "
    >
      <p
        className=" text-[2.5rem] lg:text-[4rem] leading-tight font-semibold  text-center mx-auto
         "
      >
        Minhas skills
      </p>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="gap-10 xl:gap-16  grid w-fit grid-cols-3 md:grid-cols-4"
      >
        {technologies.map((tech) => {
          return (
            <SkillBox
              title={tech.name}
              description={tech.description}
              key={tech.name}
            >
              <Image width={80} height={80} src={tech.imgUrl} alt={tech.name} />
            </SkillBox>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default Skills;
