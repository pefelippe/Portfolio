import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

import AnimatedBtn from "./animated/AnimatedBtn";

function Links() {
  return (
    <div className=" flex gap-12 justify-center items-center ">
      <AnimatedBtn
        className="hover:text-blue"
        target="_blank"
        href="https://github.com/pefelippe"
      >
        <div className=" flex justify-center items-center transition-all rounded-xl">
          <FaGithub className="headerSocial" />
        </div>
      </AnimatedBtn>

      <AnimatedBtn
        className="hover:text-blue"
        target="_blank"
        href="https://www.linkedin.com/in/pedro-felippe/"
      >
        <div className=" flex justify-center items-center transition-all rounded-xl">
          <FaLinkedin className="headerSocial" />
        </div>
      </AnimatedBtn>

      {/* <AnimatedBtn
        className="hover:text-blue"
        target="_blank"
        href="https://docs.google.com/document/d/e/2PACX-1vQ0oK4H_ynaCvtXwtO4OvYmIIt4_6vn8lTQlWqj2KnoTR4ZfUWCzjpAuDPGToTPzwoqkN9FIEbiD7MU/pub"
      >
        <div className="flex justify-center items-center transition-all rounded-xl">
          <FaFilePdf className="headerSocial" />
        </div>
      </AnimatedBtn> */}
    </div>
  );
}

export default Links;
