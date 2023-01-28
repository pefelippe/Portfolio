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
    <div className="w-full relative flex flex-row  pr-10 justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="flex flex-col  xl:flex-row  items-center"
      >
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="grid grid-cols-6 gap-2"
        >
          <SkillBox title="Html">
            <SiHtml5 className=" socialMediaIcon" />
          </SkillBox>
          <SkillBox title="Css">
            <SiCss3 className=" socialMediaIcon" />
          </SkillBox>
          <SkillBox title="Javascript">
            <SiJavascript className=" socialMediaIcon" />
          </SkillBox>
          <SkillBox title="React">
            <SiReact className=" socialMediaIcon" />
          </SkillBox>
          <SkillBox title="Next.js">
            <SiNextdotjs className="socialMediaIcon" />
          </SkillBox>
          <SkillBox title="Git">
            <SiGit className=" socialMediaIcon" />
          </SkillBox>
        </motion.div>

        <motion.div
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="grid grid-cols-6 gap-2"
        >
          <SkillBox title="Docker">
            <SiDocker className=" socialMediaIcon" />
          </SkillBox>
          <SkillBox title="Tailwind">
            <SiTailwindcss className=" socialMediaIcon" />
          </SkillBox>
          <SkillBox title="Node">
            <SiNodedotjs className=" socialMediaIcon" />
          </SkillBox>
          <SkillBox title="Typescript">
            <SiTypescript className=" socialMediaIcon" />
          </SkillBox>
          <SkillBox title="AWS">
            <SiAmazonaws className=" socialMediaIcon" />
          </SkillBox>
          <SkillBox title="MongoDB">
            <SiMongodb className=" socialMediaIcon" />
          </SkillBox>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Skills;
