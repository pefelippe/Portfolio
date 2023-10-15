import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

import AnimatedBtn from "./animated/AnimatedBtn";

function Links() {
  return (
    <div className=" flex items-center flex-col gap-3 w-full ">
      <AnimatedBtn
        className="rounded-full p-2 bg-[#fff]  w-full px-6 py-4 gap-4 font-bold"
        target="_blank"
        href="https://github.com/pefelippe"
      >
        <div className=" flex justify-center items-center transition-all rounded-xl gap-4 text-xl">
          <FaGithub className="headerSocial" /> <p>Github</p>
        </div>
      </AnimatedBtn>

      <AnimatedBtn
        className="rounded-full p-2 bg-[#fff]  w-full px-6 py-4 gap-4 font-bold"
        target="_blank"
        href="https://www.linkedin.com/in/pedro-felippe/"
      >
        <div className=" justify-center flex items-center gap-3 transition-all rounded-xl text-xl">
          <FaLinkedin className="headerSocial" /> <p>Linkedin </p>
        </div>
      </AnimatedBtn>
      <AnimatedBtn
        className="rounded-full p-2 bg-[#fff]  w-full px-6 py-4 gap-4 font-bold"
        target="_blank"
        href="https://docs.google.com/document/d/e/2PACX-1vQ0oK4H_ynaCvtXwtO4OvYmIIt4_6vn8lTQlWqj2KnoTR4ZfUWCzjpAuDPGToTPzwoqkN9FIEbiD7MU/pub"
      >
        <div className=" justify-center flex items-center gap-3 transition-all rounded-xl text-xl">
          <FaFilePdf className="headerSocial" /> <p>Resume </p>
        </div>
      </AnimatedBtn>
    </div>
  );
}

export default Links;
