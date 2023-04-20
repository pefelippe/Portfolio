import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import SkillBox from "../components/SkillBox";
import { technologies } from "../constants";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.5 }}
      className="h-fit max-w-4xl min-h-[40vh] mx-auto max-xl:px-8 text-xl  rounded-md text-center 
      flex flex-col justify-center gap-4  items-center "
    >
      <p className="text-[3rem] lg:text-[4rem] leading-tight font-semibold">
        Confira minhas <b className="bg-blue text-white px-2">skills</b>
      </p>
      <p className="text-[1.8rem] font-medium text-gray-500 mx-auto max-w-xl ">
        Passe o mouse por cima da skill para maiores detalhes
      </p>
      <motion.div
        initial={{ opacity: 0, x: 250 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="gap-10 grid w-fit grid-cols-4 md:grid-cols-6  mx-auto py-5"
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
