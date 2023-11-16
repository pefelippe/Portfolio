import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

import AnimatedBtn from "./animated/AnimatedBtn";

function Links() {
  return (
    <div className="w-full flex items-center  justify-start gap-6  text-[#001514] mt-2">
      <AnimatedBtn
        className="rounded-md   font-semibold "
        target="_blank"
        href="https://github.com/pefelippe"
      >
        <FaGithub className="headerSocial" />
      </AnimatedBtn>

      <AnimatedBtn
        className="rounded-md  font-semibold "
        target="_blank"
        href="https://www.linkedin.com/in/pedro-felippe/"
      >
        <FaLinkedin className="headerSocial" />
      </AnimatedBtn>

      <AnimatedBtn
        className="rounded-md  font-semibold"
        target="_blank"
        href="https://docs.google.com/document/d/1xl45doLPK-BEZ-yLpfr7KnODSTqEJWweH2MzCqTf1S0/edit?usp=sharing"
      >
        <FaFilePdf className="headerSocial" />
      </AnimatedBtn>
    </div>
  );
}

export default Links;
