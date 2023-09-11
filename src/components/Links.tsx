import React from "react";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

import AnimatedBtn from "./animated/AnimatedBtn";

function Links() {
  return (
    <div className="flex flex-col gap-4 mx-auto">
      <div className=" flex gap-8 ">
        <AnimatedBtn
          className="hover:text-blue"
          target="_blank"
          href="https://github.com/pefelippe"
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
          href="https://docs.google.com/document/d/e/2PACX-1vQ0oK4H_ynaCvtXwtO4OvYmIIt4_6vn8lTQlWqj2KnoTR4ZfUWCzjpAuDPGToTPzwoqkN9FIEbiD7MU/pub"
        >
          <FaFilePdf className="h-8 w-8 md:h-10 md:w-10 hover:text-blue" />
        </AnimatedBtn>
      </div>
    </div>
  );
}

export default Links;
