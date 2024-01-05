/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

function AboutContent() {
  return (
    <motion.div
      className="flex justify-start w-full mx-auto  gap-10
       items-center relative  max-xl:flex-col min-h-screen"
    >
      <motion.div

        className="font-extralight text-xl  flex flex-col gap-4
         h-full w-full justify-start text-start items-start"
      >
        <motion.h1
          initial={{ y: 75 }}
          animate={{  y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[40px] xl:text-7xl max-w-3xl font-bold leading-relaxed tracking-tighter font-mono"
        >
          Hello, I'm Pedro 👋
        </motion.h1>

        <motion.h3
          initial={{ y: 75, opacity: 0 }}
          animate={{  y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }} 
          className="font-thin text-xl xl:text-3xl  max-w-xl"
        >
          I'm a Full Stack Software Engineer based in Brazil.
        </motion.h3>

        {/* <Links /> */}
      </motion.div>
    </motion.div>
  );
}

export default AboutContent;
