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
    <div className="w-full relative flex flex-row  px-10 justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="flex flex-col  xl:flex-row  items-center"
      >
        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 2, delay: 1 }}
          className="grid grid-cols-3 xl:grid-cols-6"
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
          <SkillBox title="Git">
            <SiGit className=" socialMediaIcon  hover:text-[#5865f2]" />
          </SkillBox>
        </motion.div>

        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 2, delay: 1 }}
          className="grid grid-cols-3 xl:grid-cols-6"
        >
          <SkillBox title="Docker">
            <SiDocker className=" socialMediaIcon  hover:text-[#5865f2]" />
          </SkillBox>
          <SkillBox title="Tailwind">
            <SiTailwindcss className=" socialMediaIcon  hover:text-[#5865f2]" />
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
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Skills;
