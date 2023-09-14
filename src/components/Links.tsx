import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

import AnimatedBtn from "./animated/AnimatedBtn";

function Links() {
  return (
    <div className="ml-2  mt-2 flex gap-10 justify-center items-center">
      <AnimatedBtn
        className="hover:text-blue"
        target="_blank"
        href="https://github.com/pefelippe"
      >
        <FaGithub className="headerSocial" />
      </AnimatedBtn>

      <AnimatedBtn
        className="hover:text-blue"
        target="_blank"
        href="https://www.linkedin.com/in/pedro-felippe/"
      >
        <FaLinkedin className="headerSocial" />
      </AnimatedBtn>

      <AnimatedBtn
        className="hover:text-blue"
        target="_blank"
        href="https://docs.google.com/document/d/e/2PACX-1vQ0oK4H_ynaCvtXwtO4OvYmIIt4_6vn8lTQlWqj2KnoTR4ZfUWCzjpAuDPGToTPzwoqkN9FIEbiD7MU/pub"
      >
        <FaFilePdf className="headerSocial" />
      </AnimatedBtn>
    </div>
  );
}

export default Links;
