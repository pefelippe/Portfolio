import { FaGithub, FaLinkedin } from "react-icons/fa";

import AnimatedBtn from "./animated/AnimatedBtn";
import AnimateLink from "./animated/AnimatedLink";

function Links() {
  return (
    <div className=" flex items-center  justify-center gap-3 w-full max-w-md ">
      <AnimatedBtn
        className="rounded-md bg-[#fff] p-2 font-semibold"
        target="_blank"
        href="https://github.com/pefelippe"
      >
        <FaGithub className="headerSocial" />
      </AnimatedBtn>

      <AnimatedBtn
        className="rounded-md p-2 bg-[#fff] font-semibold"
        target="_blank"
        href="https://www.linkedin.com/in/pedro-felippe/"
      >
        <FaLinkedin className="headerSocial" />
      </AnimatedBtn>
      <AnimateLink
        className="rounded-md x bg-blue px-6 w-full  py-3 gap-3 font-semibold text-white"
        href="/contact"
      >
        <div className=" justify-center flex items-center gap-3 transition-all rounded-xl text-2xl">
          <p>Contact-me </p>
        </div>
      </AnimateLink>
    </div>
  );
}

export default Links;
