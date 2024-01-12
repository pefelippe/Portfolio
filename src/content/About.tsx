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
      className="flex w-full items-start text-start  justify-start  rounded-md flex-col gap-10 max-w-7xl mx-auto"
    >
      <div className="w-full flex flex-row-reverse max-lg:flex-col  gap-20 items-center min-h-fit ">
        <motion.img
          src="assets/pedrof.jpg"
          alt="pedrofelippe"
          className=" object-cover max-lg:hidden lg:max-w-[400px] w-full border-2 rounded-md border-[#101010]"
        />
        <div className="w-full max-w-5xl text-xl  flex flex-col gap-6">
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-tighter underline underline-offset-4 decoration-blue ">
            About me
          </h1>
          <Skills />
          <p>
            I'm a <span className="font-semibold">front-end developer</span>{" "}
            with experience since 2020, contributing to the creation of digital
            products for companies such as HP Inc and Furukawa Electric.
            <br /> <br />I use my technical skills to build to build
            user-friendly web apps and create RESTful APIs. I craft interfaces
            with React/Next.js/Typescript. manage databases, handle UI/UX, all
            integrated with CI/CD pipelines. <br /> <br />
            In my free time, I've been developing personal projects from
            scratch, overseeing the backend, frontend, UI/UX, marketing, and
            more. <br /> <br />
          </p>
        </div>
      </div>
    </motion.div>
  );
}
