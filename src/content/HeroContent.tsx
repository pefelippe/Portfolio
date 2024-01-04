/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Skills from "../components/Skills";

export default function About() {
  return (
    <motion.div
      className="flex justify-center w-full mx-auto  max-w-6xl py-24 gap-6 xl:gap-24 max-xl:text-center max-xl:max-w-3xl max-xl:flex-col
     h-fit  items-center   "
    >
      <motion.img
        initial={{ opacity: 0, x: -75 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75 }}
        src="/assets/pedrof.jpg"
        alt="me"
        className="h-fit  object-cover max-xl:rounded-full max-xl:w-28 max-xl:h-28 rounded-md  max-h-[60vh] shadow"
      />

      <motion.div
        initial={{ opacity: 0, x: -75 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75 }}
        className="flex flex-col w-full gap-4"
      >
        <h4 className="text-md px-2 bg-blue font-medium w-fit text-white uppercase tracking-[2px]">
          About-me
        </h4>
        <h1 className="text-5xl xl:text-6xl  font-bold leading-[1.2] max-w-xl w-fit ">
          Creativity to <span className="">build digital solutions</span>
        </h1>

        <motion.span
          initial={{ opacity: 0, x: -75 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          className="text-[20px] font-regular w-full text-gray-700"
        >
          I've been coding since 2018, creating digital solutions. My focus is
          on create simple, fast and easy to use interfaces. I deal with cloud
          services, keeping everything connected, and making sure the databases
          work smoothly.
        </motion.span>
        <Skills />
      </motion.div>
    </motion.div>
  );
}
