import React from "react";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";

import AnimatedBtn from "./animated/AnimatedBtn";

type Props = {};

export default function SocialLinks({}: Props) {
  return (
    <div className="flex gap-7 justify-center max-md:mx-auto">
      <AnimatedBtn className=" " href="https://github.com/pefelippe">
        <FaGithub className="h-7 w-7 hover:text-[#5865f2]" />
      </AnimatedBtn>

      <AnimatedBtn
        className=""
        href="https://www.linkedin.com/in/pedro-felippe/"
      >
        <FaLinkedinIn className="h-7 w-7  hover:text-[#5865f2] " />
      </AnimatedBtn>

      <AnimatedBtn className="" href="https://resume.io/r/m2cn8pnqu">
        <FaFilePdf className="h-7 w-7 hover:text-[#5865f2]" />
      </AnimatedBtn>
    </div>
  );
}
