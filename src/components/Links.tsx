import React from "react";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

import AnimatedBtn from "./animated/AnimatedBtn";

function Links() {
  return (
    <div className=" flex gap-10 w-fit">
      <AnimatedBtn
        className="hover:text-blue"
        target="_blank"
        href="github.com/pefelippe"
      >
        <FaGithub className="h-8 w-8 md:h-10 md:w-10 hover:text-blue" />
      </AnimatedBtn>
      <AnimatedBtn
        className="hover:text-blue"
        target="_blank"
        href="https://www.linkedin.com/in/pedro-felippe/"
      >
        <FaLinkedin className="h-8 w-8 md:h-10 md:w-10 hover:text-blue" />
      </AnimatedBtn>
      <AnimatedBtn
        className="hover:text-blue"
        target="_blank"
        href="https://docs.google.com/document/d/1xl45doLPK-BEZ-yLpfr7KnODSTqEJWweH2MzCqTf1S0/edit"
      >
        <FaFilePdf className="h-8 w-8 md:h-10 md:w-10 hover:text-blue" />
      </AnimatedBtn>
    </div>
  );
}

export default Links;
