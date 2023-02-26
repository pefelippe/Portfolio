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
    <div
      id="skills"
      className="relative flex flex-col items-center w-screen snap-center
    justify-center xl:justify-between mx-auto max-w-7xl rounded-md text-[#fff] gap-4 px-8"
    >
      <div className="w-full">
        <ContentTitle title="Skills" />
      </div>

      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="w-full grid xl:grid-cols-6 grid-cols-2 mx-auto  gap-4 "
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
