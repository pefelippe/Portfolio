import React from "react";
import { FaFilePdf, FaGithub, FaGithubAlt, FaLinkedin } from "react-icons/fa";

import AnimatedBtn from "./animated/AnimatedBtn";

function LinksDetailed() {
  return (
    <div className=" flex  w-full mx-auto justify-center gap-8 items-center ">
      <AnimatedBtn
        target="_blank"
        href="https://www.github.com/pefelippe"
        className="flex flex-col gap-2 text-xl h-20 w-20 justify-center items-center bg-[#272727] hover:bg-[#242424] rounded-3xl"
      >
        <>
          <FaGithub className="h-10 w-10" />

          {/* <div className=" gap-10 flex flex-col font-medium">Github</div> */}
        </>
      </AnimatedBtn>

      <AnimatedBtn
        target="_blank"
        href="https://www.linkedin.com/in/pedro-felippe/"
        className="flex flex-col gap-2 text-xl  h-20 w-20 justify-center  items-center bg-[#272727] hover:bg-[#242424] rounded-3xl"
      >
        <>
          <FaLinkedin className="h-10 w-10" />

          {/* <div className=" gap-10 flex flex-col font-medium">Linkedin</div> */}
        </>
      </AnimatedBtn>

      <AnimatedBtn
        target="_blank"
        href="https://docs.google.com/document/d/e/2PACX-1vQ0oK4H_ynaCvtXwtO4OvYmIIt4_6vn8lTQlWqj2KnoTR4ZfUWCzjpAuDPGToTPzwoqkN9FIEbiD7MU/pub"
        className="flex flex-col gap-2 text-xl h-20 w-20 justify-center  items-center bg-[#272727] hover:bg-[#242424] rounded-3xl"
      >
        <>
          <FaFilePdf className="h-10 w-10" />

          {/* <div className=" gap-10 flex flex-col font-medium">Resume</div> */}
        </>
      </AnimatedBtn>
    </div>
  );
}

export default LinksDetailed;
