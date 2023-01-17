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
    <div className=" flex relative flex-col md:text-left max-w-7xl  mx-auto max-xl:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col  items-center  overflow:hidden  space-y-8 w-full"
      >
        <h4 className="xl:w-full text-center text-3xl font-bold tracking-tight  md:text-5xl lg:text-5xl underline decoration-[#5865f2] ">
          Minhas Skills
        </h4>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6  gap-8 w-full ">
          <SkillBox title="Html">
            <SiHtml5 className=" socialMediaIcon xl:h-16 xl:w-16 text-[#fff]" />
          </SkillBox>
          <SkillBox title="Css">
            <SiCss3 className=" socialMediaIcon xl:h-16 xl:w-16 text-[#fff]" />
          </SkillBox>
          <SkillBox title="Javascript">
            <SiJavascript className=" socialMediaIcon xl:h-16 xl:w-16 text-[#fff]" />
          </SkillBox>
          <SkillBox title="React">
            <SiReact className=" socialMediaIcon xl:h-16 xl:w-16 text-[#fff]" />
          </SkillBox>
          <SkillBox title="Next.js">
            <SiNextdotjs className=" socialMediaIcon xl:h-16 xl:w-16 text-[#fff]" />
          </SkillBox>
          <SkillBox title="Tailwind">
            <SiTailwindcss className=" socialMediaIcon xl:h-16 xl:w-16 text-[#fff]" />
          </SkillBox>
          <SkillBox title="Docker">
            <SiDocker className=" socialMediaIcon xl:h-16 xl:w-16 text-[#fff]" />
          </SkillBox>
          <SkillBox title="Node">
            <SiNodedotjs className=" socialMediaIcon xl:h-16 xl:w-16 text-[#fff]" />
          </SkillBox>
          <SkillBox title="Typescript">
            <SiTypescript className=" socialMediaIcon xl:h-16 xl:w-16 text-[#fff]" />
          </SkillBox>
          <SkillBox title="AWS">
            <SiAmazonaws className=" socialMediaIcon xl:h-16 xl:w-16 text-[#fff]" />
          </SkillBox>
          <SkillBox title="MongoDB">
            <SiMongodb className=" socialMediaIcon xl:h-16 xl:w-16 text-[#fff]" />
          </SkillBox>
          <SkillBox title="Git">
            <SiGit className=" socialMediaIcon xl:h-16 xl:w-16 text-[#fff]" />
          </SkillBox>
        </div>
      </motion.div>
    </div>
  );
}

export default Skills;
