/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import Skills from "../components/Skills";

export default function About() {
  return (
    <motion.div
      id="about-content"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="flex w-full items-start text-start  justify-start  rounded-md flex-col gap-10 max-w-5xl mx-auto"
    >

      <div className="w-full flex  max-lg:flex-col  gap-12 items-center min-h-fit ">
        <motion.img
          src="assets/pedrof.jpg"
          alt="pedrofelippe"
          className=" object-cover max-lg:hidden lg:max-w-[350px] w-full shadow-xl rounded-md "
        />
        <div className="w-full max-w-2xl  flex flex-col  text-lg">
  
          <h1 className="text-lg lg:text-2xl font-extrabold  text-blue uppercase tracking-wider ">
            About me
          </h1>
          <p>
          <br /> 
          With a proven track record of contributing to the development of digital products for renowned companies like HP Inc and Furukawa Electric,
          I leverage my technical expertise to design and build user-friendly web applications using React, Next.js, and TypeScript.  <br />  <br /> 
          My proficiency extends to creating robust RESTful APIs with Node.js, managing databases, and ensuring a seamless integration with CI/CD pipelines. <br />  <br /> 
  
          </p>
          <Skills />
        </div>
      </div>
    </motion.div>
  );
}
