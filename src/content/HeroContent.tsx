/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

function AboutContent() {
  return (
    <motion.div
      className="flex justify-start w-full mx-auto min-h-fit py-20 gap-10
       items-start relative  max-xl:flex-col max-w-5xl text-white "
    >
      <motion.div
        initial={{ opacity: 0, x: -75 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75 }}
        className="font-extralight text-xl  flex flex-col gap-4
         h-full w-full justify-start text-start items-start xl:max-w-3xl"
      >
        <h1 className="text-[40px] xl:text-7xl max-w-3xl font-bold leading-relaxed tracking-tighter ">
          Hello, <br />
          I'm Pedro Felippe. <br />
        </h1>

        <h3 className="font-thin text-xl xl:text-3xl max-xl:max-w-lg text-[#f9f9f9]">
          A Full-Stack Web Developer based in Brazil.
        </h3>

        {/* <Links /> */}
      </motion.div>
    </motion.div>
  );
}

export default AboutContent;
