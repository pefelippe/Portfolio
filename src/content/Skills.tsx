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
import ContentTitle from "../atoms/ContentTitle";

import SkillBox from "../components/SkillBox";

type Props = {};

function Skills({}: Props) {
  return (
    <div className=" w-full relative max-w-7xl flex flex-col  max-xl:space-y-8  xl:flex-row  items-center max-lg:px-5">
      <ContentTitle title="Skills" />
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className="flex  w-full"
      >
        <SkillBox title="Git">
          <SiGit className="socialMediaIcon" />
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
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className="flex w-full"
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
    </div>
  );
}

export default Skills;
