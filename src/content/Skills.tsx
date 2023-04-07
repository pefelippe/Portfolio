import { motion } from "framer-motion";
import React from "react";
import {
  SiAmazonaws,
  SiDocker,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import SkillBox from "../components/SkillBox";
import Image from "next/image";

type Props = {};

function Skills({}: Props) {
  return (
    <div className="w-full mx-auto max-w-7xl flex flex-col justify-center  items-center text-white gap-10 md:gap-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1 }}
        className=" gap-16 grid w-fit grid-cols-9 max-lg:grid-cols-3 "
      >
        <SkillBox title="Git">
          <Image width="70" height="70" src="/assets/tech/git.png" alt="git" />
        </SkillBox>
        <SkillBox title="Javascript">
          <Image
            width="70"
            height="70"
            src="/assets/tech/javascript.png"
            alt="javascript"
          />
        </SkillBox>
        <SkillBox title="React">
          <Image
            width="70"
            height="70"
            src="/assets/tech/reactjs.png"
            alt="react"
          />
        </SkillBox>
        <SkillBox title="Node">
          <Image
            width="70"
            height="70"
            src="/assets/tech/nodejs.png"
            alt="nodejs"
          />
        </SkillBox>
        <SkillBox title="Typescript">
          <Image
            width="70"
            height="70"
            src="/assets/tech/typescript.png"
            alt="typescript"
          />
        </SkillBox>
        <SkillBox title="CSS">
          <Image width="70" height="70" src="/assets/tech/css.png" alt="css" />
        </SkillBox>
        <SkillBox title="Docker">
          <Image
            width="70"
            height="70"
            src="/assets/tech/docker.png"
            alt="docker"
          />
        </SkillBox>
        <SkillBox title="Tailwind">
          <Image
            width="70"
            height="70"
            src="/assets/tech/tailwind.png"
            alt="tailwind"
          />
        </SkillBox>
        <SkillBox title="mongodb">
          <Image
            width="70"
            height="70"
            src="/assets/tech/mongodb.png"
            alt="mongodb"
          />
        </SkillBox>
      </motion.div>
    </div>
  );
}

export default Skills;
