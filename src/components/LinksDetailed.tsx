import React from "react";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

import AnimatedBtn from "./animated/AnimatedBtn";

function LinksDetailed() {
  return (
    <div className="flex-col absolute left-5 top-0 bottom-0 flex   justify-center gap-8 items-center ">
      <AnimatedBtn
        target="_blank"
        href="https://www.github.com/pefelippe"
        className="flex flex-col gap-2 text-xl justify-center items-center bg-[#272727] hover:bg-[#222222] rounded-3xl"
      >
        <>
          <FaGithub className="md:h-9 md:w-9 h-8 w-8" />

          {/* <div className=" gap-10 flex flex-col font-medium">Github</div> */}
        </>
      </AnimatedBtn>

      <AnimatedBtn
        target="_blank"
        href="https://www.linkedin.com/in/pedro-felippe/"
        className="flex flex-col gap-2 text-xl  justify-center  items-center bg-[#272727] hover:bg-[#222222] rounded-3xl"
      >
        <>
          <FaLinkedin className="md:h-9 md:w-9 h-8 w-8" />

          {/* <div className=" gap-10 flex flex-col font-medium">Linkedin</div> */}
        </>
      </AnimatedBtn>

      <AnimatedBtn
        target="_blank"
        href="https://docs.google.com/document/d/e/2PACX-1vQ0oK4H_ynaCvtXwtO4OvYmIIt4_6vn8lTQlWqj2KnoTR4ZfUWCzjpAuDPGToTPzwoqkN9FIEbiD7MU/pub"
        className="flex flex-col gap-2 text-xl   justify-center  items-center bg-[#272727] hover:bg-[#222222] rounded-3xl"
      >
        <>
          <FaFilePdf className="md:h-9 md:w-9 h-8 w-8" />

          {/* <div className=" gap-10 flex flex-col font-medium">Resume</div> */}
        </>
      </AnimatedBtn>
    </div>
  );
}

export default LinksDetailed;
