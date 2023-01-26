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
    <div className="max-w-7xl flex flex-row relative md:text-left space-around px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex xl:flex-row  items-center flex-col xl:space-x-12 max-xl:space-y-8"
      >
        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.75 }}
          className="grid grid-cols-3 md:grid-cols-6   md:gap-12 "
        >
          <SkillBox title="Html">
            <SiHtml5 className=" socialMediaIcon  hover:text-[#5865f2]" />
          </SkillBox>
          <SkillBox title="Css">
            <SiCss3 className=" socialMediaIcon  " />
          </SkillBox>
          <SkillBox title="Javascript">
            <SiJavascript className=" socialMediaIcon  hover:text-[#5865f2]" />
          </SkillBox>
          <SkillBox title="React">
            <SiReact className=" socialMediaIcon  hover:text-[#5865f2]" />
          </SkillBox>
          <SkillBox title="Next.js">
            <SiNextdotjs className=" socialMediaIcon  hover:text-[#5865f2]" />
          </SkillBox>
          <SkillBox title="Tailwind">
            <SiTailwindcss className=" socialMediaIcon  hover:text-[#5865f2]" />
          </SkillBox>
        </motion.div>

        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.75 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-12"
        >
          <SkillBox title="Docker">
            <SiDocker className=" socialMediaIcon  hover:text-[#5865f2]" />
          </SkillBox>
          <SkillBox title="Node">
            <SiNodedotjs className=" socialMediaIcon  hover:text-[#5865f2]" />
          </SkillBox>
          <SkillBox title="Typescript">
            <SiTypescript className=" socialMediaIcon  hover:text-[#5865f2]" />
          </SkillBox>
          <SkillBox title="AWS">
            <SiAmazonaws className=" socialMediaIcon  hover:text-[#5865f2]" />
          </SkillBox>
          <SkillBox title="MongoDB">
            <SiMongodb className=" socialMediaIcon  hover:text-[#5865f2]" />
          </SkillBox>
          <SkillBox title="Git">
            <SiGit className=" socialMediaIcon  hover:text-[#5865f2]" />
          </SkillBox>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Skills;
