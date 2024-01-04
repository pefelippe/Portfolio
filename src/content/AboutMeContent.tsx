/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Skills from "../components/Skills";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -75 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75 }}
      className="flex justify-center w-full mx-auto  xl:max-w-5xl max-w-xl py-20
     max-xl:text-center max-xl:flex-col h-fit  items-center gap-8 xl:gap-16"
    >
      <motion.div
 
        className="flex flex-col w-full gap-8 "
      >
        <h1 className="text-5xl xl:text-6xl  font-bold leading-[1.2]  w-fit ">
          Creativity to <span className="">build digital solutions</span>
        </h1>
        <motion.span
          className="text-2xl font-regular w-full text-gray-700"
        >
          I've been coding digital solutions since 2018. My focus is on create
          simple, fast and easy to use interfaces. I deal with cloud services,
          keeping everything connected, and making sure the databases work
          smoothly.
        </motion.span>

        <Skills />
      </motion.div>

      <motion.img
        initial={{ opacity: 0, x: -75 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75 }}
        src="/assets/pedrof.jpg"
        alt="me"
        className="object-cover rounded-xs w-full h-[60vh] max-h-[500px] max-w-[400px]  shadow"
      />
    </motion.div>
  );
}
