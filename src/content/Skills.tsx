import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import SkillBox from "../components/SkillBox";
import { technologies } from "../constants";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      className="h-fit min-h-[40vh]  max-w-7xl mx-auto max-xl:px-8 text-xl  rounded-md 
      flex max-lg:flex-col justify-start gap-10 lg:gap-20  items-center "
    >
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 50 }}
        transition={{ duration: 2 }}
        className="flex flex-col text-start gap-2  
        items-start justify-start max-w-xl mx-auto max-lg:text-center"
      >
        <p className="text-[1.4rem] font-bold text-blue max-lg:mx-auto">
          Skills
        </p>

        <h2 className="text-[2.8rem] md:text-[3.3rem] leading-tight font-semibold ">
          Conheça as minhas skills
        </h2>

        <p className=" text-[1.5rem] font-medium text-gray-300  max-lg:mx-auto">
          Passe o mouse para detalhes
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="gap-10  grid w-fit grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 "
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
