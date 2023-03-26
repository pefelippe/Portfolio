import React from "react";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";

import AnimatedBtn from "./animated/AnimatedBtn";

type Props = {};

export default function SocialLinks({}: Props) {
  return (
    <div className="flex w-fit gap-8 justify-center  items-center  text-xl text-white">
      <AnimatedBtn className="" href="https://github.com/pefelippe">
        <div
          className=" flex gap-3 items-center 
         font-semibold transition-all   hover:text-[#5865f2]"
        >
          <FaGithub className="w-8 h-8 md:h-10 md:w-10" />
        </div>
      </AnimatedBtn>

      <AnimatedBtn
        className=""
        href="https://www.linkedin.com/in/pedro-felippe/"
      >
        <div
          className="  flex gap-3 items-center 
          font-semibold transition-all  hover:text-[#5865f2]"
        >
          <FaLinkedinIn className="w-8 h-8 md:h-10 md:w-10" />
        </div>
      </AnimatedBtn>

      <AnimatedBtn className="" href="https://resume.io/r/m2cn8pnqu">
        <div
          className="  flex gap-3 items-center 
          font-semibold transition-all  hover:text-[#5865f2]"
        >
          <FaFilePdf className="w-8 h-8 md:h-10 md:w-10" />
        </div>
      </AnimatedBtn>
    </div>
  );
}
