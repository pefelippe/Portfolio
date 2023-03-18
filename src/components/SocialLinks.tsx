import React from "react";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";

import AnimatedBtn from "./animated/AnimatedBtn";

type Props = {};

export default function SocialLinks({}: Props) {
  return (
    <div className="flex gap-4 justify-center max-md:mx-auto text-xl ">
      <AnimatedBtn className="" href="https://github.com/pefelippe">
        <div
          className="flex gap-3 items-center px-8 p-4  rounded-md font-semibold transition-all 
        max-w-sm hover:bg-[#fff]/80 text-[#000]  bg-[#fff] "
        >
          <FaGithub className="h-7 w-7 " />
          Github
        </div>
      </AnimatedBtn>

      <AnimatedBtn
        className=""
        href="https://www.linkedin.com/in/pedro-felippe/"
      >
        <div className="flex gap-3 items-center px-8 p-4  rounded-md font-semibold transition-all max-w-sm hover:bg-[#5865f2]/80 text-[#fff]  bg-[#5865f2]">
          <FaLinkedinIn className="h-7 w-7 " />
          Linkedin
        </div>
      </AnimatedBtn>
    </div>
  );
}
