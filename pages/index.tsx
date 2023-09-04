import { motion } from "framer-motion";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

import AnimatedBtn from "../src/components/animated/AnimatedBtn";
import BlogPosts from "../src/components/BlogPosts";
import About from "../src/content/About";

export default function Home() {
  return (
    <motion.div className=" flex flex-col text-center max-w-xl mx-auto px-8 gap-4 py-10">
      <About />

      <div className="w-full  flex text-xl justify-center max-w-sm mx-auto  gap-10 items-center font-normal ">
        <AnimatedBtn className="" href="https://github.com/pefelippe">
          <div className=" flex gap-1 items-center w-full transition-all hover:text-blue">
            <FaGithub /> Github
          </div>
        </AnimatedBtn>

        <AnimatedBtn
          className=""
          href="https://www.linkedin.com/in/pedro-felippe/"
        >
          <div
            className="  flex gap-1 items-center 
             transition-all  hover:text-blue"
          >
            <FaLinkedin /> Linkedin
          </div>
        </AnimatedBtn>
        <AnimatedBtn
          href="https://docs.google.com/document/d/1xl45doLPK-BEZ-yLpfr7KnODSTqEJWweH2MzCqTf1S0/edit"
          className=" flex gap-1 items-center 
          transition-all  hover:text-blue"
        >
          <>
            <FaFilePdf />
            <p>Resume</p>
          </>
        </AnimatedBtn>
      </div>

      <BlogPosts />
    </motion.div>
  );
}
