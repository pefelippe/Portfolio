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
    <div className="flex relative flex-col md:text-left max-w-7xl  mx-auto max-xl:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col  items-center  overflow:hidden "
      >
        <div className="grid grid-cols-3 lg:grid-cols-6 xl:grid-cols-12 gap-4 w-7xl">
          <SkillBox title="Html">
            <SiHtml5 className=" socialMediaIcon lg:h-20 lg:w-20  hover:text-[#5865f2]" />
          </SkillBox>
          <SkillBox title="Css">
            <SiCss3 className=" socialMediaIcon lg:h-20 lg:w-20  " />
          </SkillBox>
          <SkillBox title="Javascript">
            <SiJavascript className=" socialMediaIcon lg:h-20 lg:w-20 hover:text-[#5865f2]" />
          </SkillBox>
          <SkillBox title="React">
            <SiReact className=" socialMediaIcon lg:h-20 lg:w-20 hover:text-[#5865f2]" />
          </SkillBox>
          <SkillBox title="Next.js">
            <SiNextdotjs className=" socialMediaIcon lg:h-20 lg:w-20 hover:text-[#5865f2]" />
          </SkillBox>
          <SkillBox title="Tailwind">
            <SiTailwindcss className=" socialMediaIcon lg:h-20 lg:w-20 hover:text-[#5865f2]" />
          </SkillBox>
          <SkillBox title="Docker">
            <SiDocker className=" socialMediaIcon lg:h-20 lg:w-20 hover:text-[#5865f2]" />
          </SkillBox>
          <SkillBox title="Node">
            <SiNodedotjs className=" socialMediaIcon lg:h-20 lg:w-20 hover:text-[#5865f2]" />
          </SkillBox>
          <SkillBox title="Typescript">
            <SiTypescript className=" socialMediaIcon lg:h-20 lg:w-20 hover:text-[#5865f2]" />
          </SkillBox>
          <SkillBox title="AWS">
            <SiAmazonaws className=" socialMediaIcon lg:h-20 lg:w-20 hover:text-[#5865f2]" />
          </SkillBox>
          <SkillBox title="MongoDB">
            <SiMongodb className=" socialMediaIcon lg:h-20 lg:w-20 hover:text-[#5865f2]" />
          </SkillBox>
          <SkillBox title="Git">
            <SiGit className=" socialMediaIcon lg:h-20 lg:w-20 hover:text-[#5865f2]" />
          </SkillBox>
        </div>
      </motion.div>
    </div>
  );
}

export default Skills;
