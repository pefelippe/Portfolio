/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import Skills from "../components/Skills";

function AboutContent() {
  return (
    <motion.div
      className="flex justify-between w-full mx-auto  max-w-7xl  h-fit pt-[25vh] px-6 max-h-[80vh] min-h-fit
       items-center relative  max-xl:flex-col  "
    >
      <motion.div
        initial={{ opacity: 0, y: -75 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        className="font-extralight text-xl  gap-4 flex flex-col  h-full w-full justify-center items-center xl:items-start lg:max-w-2xl"
      >
        <motion.img
          initial={{ opacity: 0, x: -75 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          src="/assets/avatar-pdr.png"
          alt="me"
          className="flex w-32 h-32  rounded-full xl:hidden"
        />
        <h1 className="text-5xl lg:text-7xl  font-bold leading-[1.2]">
          Pedro Felippe
        </h1>

        <p className=" text-gray-300 font-thin text-base xl:text-xl max-xl:max-w-xl max-xl:text-center pb-4">
          I have been developing digital products since 2018, including web
          applications, PWAs, websites, e-commerce solutions, and mobile apps
          that assist organizations in refining their online presence and
          fostering growth.
        </p>

        <Skills />

        {/* <div className="mt-4 flex items-center gap-4">
          <Link
            href="/contact"
            className="text-uppercase font-semibold hover:underline
          transition-all rounded-xl text-xl p-3  max-xl:w-full max-w-xl text-center"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-uppercase font-semibold hover:bg-blue hover:underline
          transition-all rounded-xl text-xl p-3 px-9 border-2 border-blue  max-xl:w-full max-w-xl text-center"
          >
            Contact-me
          </Link>
        </div> */}
      </motion.div>

      <motion.img
        initial={{ opacity: 0, x: -75 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75 }}
        src="/assets/pedrof.jpg"
        alt="me"
        className="h-fit shadow object-cover rounded-xl max-xl:hidden max-h-[60vh]"
      />
    </motion.div>
  );
}

export default AboutContent;
