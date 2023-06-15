import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import SkillBox from "../components/SkillBox";
import { technologies } from "../constants";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ x: 250 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 1 }}
      className="gap-8 grid w-full grid-cols-6 md:grid-cols-12 mx-auto  "
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
