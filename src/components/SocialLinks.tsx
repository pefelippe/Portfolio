import React from "react";

import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";
import AnimatedBtn from "./animated/AnimatedBtn";

type Props = {};

export default function SocialLinks({}: Props) {
  return (
    <div className="flex gap-8 mt-4 justify-center ">
      <AnimatedBtn className=" " href="https://github.com/pefelippe">
        <FaGithub className="h-8 w-8  hover:text-[#5865f2]" />
      </AnimatedBtn>

      <AnimatedBtn
        className=""
        href="https://www.linkedin.com/in/pedro-felippe/"
      >
        <FaLinkedinIn className="h-8 w-8  hover:text-[#5865f2] " />
      </AnimatedBtn>

      <AnimatedBtn className="" href="https://resume.io/r/m2cn8pnqu">
        <FaFilePdf className="h-8 w-8 hover:text-[#5865f2]" />
      </AnimatedBtn>
    </div>
  );
}
