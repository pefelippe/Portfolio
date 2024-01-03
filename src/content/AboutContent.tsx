/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import Links from "../components/Socials";

function AboutContent() {
  return (
    <motion.div
      className="flex justify-center w-full mx-auto min-h-fit py-10 xl:py-20 gap-10
       items-center relative  max-xl:flex-colm max-w-7xl text-white "
    >
      <motion.div
        initial={{ opacity: 0, y: -75 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        className="font-extralight text-xl  flex flex-col gap-4
         h-full w-full justify-center text-center items-center xl:max-w-3xl"
      >
        <h1 className="text-[40px] xl:text-8xl max-w-3xl font-bold leading-relaxed tracking-tighter ">
          Hello, <br />
          I'm Pedro Felippe. <br />
        </h1>

        <h3 className="font-thin text-xl xl:text-3xl max-xl:max-w-lg text-[#f9f9f9]">
          A Software Engineer based in Brazil.
        </h3>
        <Links />
      </motion.div>
    </motion.div>
  );
}

export default AboutContent;
