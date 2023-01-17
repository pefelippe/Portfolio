import { motion } from "framer-motion";
import React from "react";
import { SiAmazonaws, SiCss3, SiDocker, SiGit, SiHtml5, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

import SkillBox from "../components/SkillBox";

type Props = {};

function Skills({}: Props) {
  return (
    <div className="xl:hmax flex relative flex-col md:text-left max-xl:w7xl  mx-auto ">
      <motion.div className="flex flex-col  items-center  overfloxl:whidden  space-y-8  xl:wfull">
        <h4 className="mt-2 xl:wfull text-center text-3xl font-bold tracking-tight  md:text-5xl lg:text-5xl ">
          Minhas Skills
        </h4>

        <div className="grid grid-cols-3 md:grid-cols-6  gap-8 p-4 xl:wfull">
          <SkillBox title="Html">
            <SiHtml5 className=" socialMediaIcon xl:h-20 xl:w-20 text-[#fff]" />
          </SkillBox>
          <SkillBox title="Css">
            <SiCss3 className=" socialMediaIcon xl:h-20 xl:w-20 text-[#fff]" />
          </SkillBox>
          <SkillBox title="Javascript">
            <SiJavascript className=" socialMediaIcon xl:h-20 xl:w-20 text-[#fff]" />
          </SkillBox>
          <SkillBox title="React">
            <SiReact className=" socialMediaIcon xl:h-20 xl:w-20 text-[#fff]" />
          </SkillBox>
          <SkillBox title="Next.js">
            <SiNextdotjs className=" socialMediaIcon xl:h-20 xl:w-20 text-[#fff]" />
          </SkillBox>
          <SkillBox title="Tailwind">
            <SiTailwindcss className=" socialMediaIcon xl:h-20 xl:w-20 text-[#fff]" />
          </SkillBox>
          <SkillBox title="Docker">
            <SiDocker className=" socialMediaIcon xl:h-20 xl:w-20 text-[#fff]" />
          </SkillBox>
          <SkillBox title="Node">
            <SiNodedotjs className=" socialMediaIcon xl:h-20 xl:w-20 text-[#fff]" />
          </SkillBox>
          <SkillBox title="Typescript">
            <SiTypescript className=" socialMediaIcon xl:h-20 xl:w-20 text-[#fff]" />
          </SkillBox>
          <SkillBox title="AWS">
            <SiAmazonaws className=" socialMediaIcon xl:h-20 xl:w-20 text-[#fff]" />
          </SkillBox>
          <SkillBox title="MongoDB">
            <SiMongodb className=" socialMediaIcon xl:h-20 xl:w-20 text-[#fff]" />
          </SkillBox>
          <SkillBox title="Git">
            <SiGit className=" socialMediaIcon xl:h-20 xl:w-20 text-[#fff]" />
          </SkillBox>
        </div>
      </motion.div>
    </div>
  );
}

export default Skills;
