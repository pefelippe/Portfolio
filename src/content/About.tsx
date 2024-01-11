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
      className="flex w-full items-center text-start  justify-start gap-4  mx-auto  max-w-6xl  rounded-md "
    >
      <div className="w-full flex max-lg:flex-col  lg:gap-20 items-center min-h-fit ">
        <motion.img
          src="assets/pedrof.jpg"
          alt="pedrofelippe"
          className=" object-cover max-h-[450px]  border-2 rounded-md"
        />
        <div className="w-full max-w-4xl text-xl font-normal  gap-4 flex flex-col">
          <h1 className="text-4xl lg:text-5xl  font-bold tracking-tighter ">
            About me
          </h1>
          <p>
            I'm a <span className="font-semibold">front-end developer</span>{" "}
            with experience since 2020, contributing to the creation of digital
            products for companies such as HP Inc and Furukawa Electric. <br />{" "}
            <br />I use my technical skills to build to build user-friendly web
            apps and create RESTful APIs. I craft interfaces with{" "}
            <span className="font-semibold">React/Next.js/Typescript</span>.
            manage databases, handle UI/UX, all integrated with CI/CD pipelines.
            <br /> <br /> In my free time, I've been developing personal
            projects from scratch, overseeing the backend, frontend, UI/UX,
            marketing, and more. <br /> <br />
          </p>

          <Skills />
        </div>
      </div>
    </motion.div>
  );
}
