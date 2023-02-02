import { motion } from "framer-motion";
import React from "react";
import {
  SiAmazonaws,
  SiCss3,
  SiDocker,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import SkillBox from "../components/SkillBox";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="w-full relative max-w-6xl justify-between flex flex-row max-md:flex-col max-md:space-y-4  xl:flex-row  items-center"
    >
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
        className="flex justify-between w-full"
      >
        <SkillBox title="Git">
          <SiGit className=" socialMediaIcon" />
        </SkillBox>
        <SkillBox title="Javascript">
          <SiJavascript className=" socialMediaIcon" />
        </SkillBox>
        <SkillBox title="React">
          <SiReact className=" socialMediaIcon" />
        </SkillBox>
        <SkillBox title="Next">
          <SiNextdotjs className="socialMediaIcon" />
        </SkillBox>
        <SkillBox title="Typescript">
          <SiTypescript className=" socialMediaIcon" />
        </SkillBox>
      </motion.div>

      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
        className="flex justify-between w-full"
      >
        <SkillBox title="AWS">
          <SiAmazonaws className=" socialMediaIcon" />
        </SkillBox>
        <SkillBox title="Docker">
          <SiDocker className=" socialMediaIcon" />
        </SkillBox>
        <SkillBox title="Tailwind">
          <SiTailwindcss className=" socialMediaIcon" />
        </SkillBox>
        <SkillBox title="Node">
          <SiNodedotjs className=" socialMediaIcon" />
        </SkillBox>

        <SkillBox title="MongoDB">
          <SiMongodb className=" socialMediaIcon" />
        </SkillBox>
      </motion.div>
    </motion.div>
  );
}

export default Skills;
