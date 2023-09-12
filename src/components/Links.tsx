import React from "react";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

import AnimatedBtn from "./animated/AnimatedBtn";

function Links() {
  return (
    <div className=" flex gap-12 lg:flex-col max-lg:py-10 max-lg:w-full max-lg:justify-center">
      <AnimatedBtn
        className="hover:text-blue"
        target="_blank"
        href="https://github.com/pefelippe"
      >
        <FaGithub className="h-10 w-10 hover:text-blue" />
      </AnimatedBtn>

      <AnimatedBtn
        className="hover:text-blue"
        target="_blank"
        href="https://www.linkedin.com/in/pedro-felippe/"
      >
        <FaLinkedin className="h-10 w-10 hover:text-blue" />
      </AnimatedBtn>

      <AnimatedBtn
        className="hover:text-blue"
        target="_blank"
        href="https://docs.google.com/document/d/e/2PACX-1vQ0oK4H_ynaCvtXwtO4OvYmIIt4_6vn8lTQlWqj2KnoTR4ZfUWCzjpAuDPGToTPzwoqkN9FIEbiD7MU/pub"
      >
        <FaFilePdf className="h-10 w-10 hover:text-blue" />
      </AnimatedBtn>
    </div>
  );
}

export default Links;
