/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import Skills from "../components/Skills";

function AboutContent() {
  return (
    <motion.div
      className="flex flex-col justify-start gap-20 w-full mx-auto h-fit max-w-5xl
    items-center md:items-start py-8 "
    >
      <div className="flex gap-8 md:gap-16 items-center relative max-md:max-w-xl max-md:mx-auto max-md:flex-col ">
        <motion.img
          initial={{ opacity: 0, x: -75 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.1 },
          }}
          src="/assets/pedrof.jpg"
          alt="me"
          className="max-md:max-h-[300px]  w-full md:max-w-[450px] h-[650px] object-cover rounded-xl"
        />

        <motion.div
          initial={{ opacity: 0, y: -75 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="relative text-[#888]  font-extralight text-lg  gap-6 flex flex-col  h-full "
        >
          <p> My name is Pedro Felippe. A Web Developer from Brazil. </p>
          <p>
            I have been developing digital products since 2018, including web
            applications, PWAs, websites, e-commerce solutions, and mobile apps
            that assist organizations in refining their online presence and
            fostering growth.
          </p>
          <p className="mb-6">
            With a strong emphasis on key areas like{" "}
            <span className="">
              user experience (UX), performance, accessibility, security,
              (CI/CD), databases and API integrations
            </span>
            .
          </p>

          <Skills />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AboutContent;
