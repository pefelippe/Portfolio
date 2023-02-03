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

import ContentTitle from "../atoms/ContentTitle";
import SkillBox from "../components/SkillBox";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="w-full relative max-w-5xl "
    >
      {/* <ContentTitle title="Skills" /> */}

      <div className="   flex flex-col max-md:flex-col max-md:space-y-4  xl:flex-row  items-center px-8">
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
      </div>
    </motion.div>
  );
}

export default Skills;
