import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import SkillBox from "../components/SkillBox";
import { technologies } from "../constants";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      className="h-fit min-h-[40vh]  max-w-7xl mx-auto  text-xl max-xl:px-8 rounded-md 
      flex max-lg:flex-col justify-between gap-10 lg:gap-20  items-center "
    >
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 50 }}
        transition={{ duration: 2 }}
        className="flex flex-col text-start gap-2  w-fit
        items-start justify-start "
      >
        <p className="text-[1.4rem] font-bold text-blue">Skills</p>

        <h2 className="text-[2.5rem] md:text-[3.3rem] leading-tight font-semibold ">
          Conheça <br /> as minhas skills
        </h2>

        <p className=" text-[1.5rem] font-medium text-gray-300  ">
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
