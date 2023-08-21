import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import SkillBox from "../components/SkillBox";
import { technologies } from "../constants";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -75 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75 }}
      className="gap-10 grid w-full grid-cols-4 md:grid-cols-12 mx-auto max-md:hidden"
    >
      {technologies.map((tech) => {
        return (
          <SkillBox
            title={tech.name}
            description={tech.description}
            key={tech.name}
          >
            <Image width={70} height={70} src={tech.imgUrl} alt={tech.name} />
          </SkillBox>
        );
      })}
    </motion.div>
  );
}

export default Skills;
