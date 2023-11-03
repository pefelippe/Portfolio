import { FaGithub, FaLinkedin } from "react-icons/fa";

import AnimatedBtn from "./animated/AnimatedBtn";

function Links() {
  return (
    <div className="  items-center  justify-start gap-8 w-full text-gray-300 grid grid-cols-2">
      <AnimatedBtn
        className="rounded-md   font-semibold  w-full "
        target="_blank"
        href="https://github.com/pefelippe"
      >
        <div className="flex flex-col items-center justify-center rounded-md gap-2 text-xl border py-5">
          <FaGithub className="headerSocial" />
          Github
        </div>
      </AnimatedBtn>

      <AnimatedBtn
        className="rounded-md  font-semibold w-full"
        target="_blank"
        href="https://www.linkedin.com/in/pedro-felippe/"
      >
        <div className="flex flex-col items-center justify-center   rounded-md gap-2 text-xl border py-5">
          <FaLinkedin className="headerSocial" /> Linkedin
        </div>
      </AnimatedBtn>

      {/* <AnimatedBtn
        className="rounded-md  font-semibold w-full "
        target="_blank"
        href="https://www.linkedin.com/in/pedro-felippe/"
      >
        <div className="flex flex-col items-center justify-center  rounded-md gap-2 text-xl border py-5">
          <FaLinkedin className="headerSocial" /> Resume
        </div>
      </AnimatedBtn> */}
    </div>
  );
}

export default Links;
