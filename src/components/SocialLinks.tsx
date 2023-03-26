import React from "react";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";

import AnimatedBtn from "./animated/AnimatedBtn";

type Props = {};

export default function SocialLinks({}: Props) {
  return (
    <div className="flex max-md:mx-auto  w-fit gap-10 justify-center  items-center  text-xl text-black">
      <AnimatedBtn className="" href="https://github.com/pefelippe">
        <div
          className=" flex gap-3 items-center w-full 
         font-semibold transition-all hover:text-[#5865f2]"
        >
          <FaGithub className="h-10 w-10" />
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
          <FaLinkedinIn className="h-10 w-10" />
        </div>
      </AnimatedBtn>

      <AnimatedBtn className="" href="https://resume.io/r/m2cn8pnqu">
        <div
          className="  flex gap-3 items-center 
          font-semibold transition-all  hover:text-[#5865f2]"
        >
          <FaFilePdf className="h-10 w-10" />
        </div>
      </AnimatedBtn>
    </div>
  );
}
