import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

import AnimatedBtn from "./animated/AnimatedBtn";

function Links() {
  return (
    <div className="w-full flex items-center  justify-center gap-8  text-gray-300 mt-2">
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
        href="https://www.linkedin.com/in/pedro-felippe/"
      >
        <FaFilePdf className="headerSocial" />
      </AnimatedBtn>
    </div>
  );
}

export default Links;
