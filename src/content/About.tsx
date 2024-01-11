/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Skills from "../components/Skills";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="flex flex-col w-full items-center  justify-start gap-2  mx-auto x max-w-7xl "
    >
      <motion.div className="flex flex-col items-center">
        <h1 className="text-4xl lg:text-5xl  font-bold tracking-tighter">
          About me
        </h1>

        <h3 className=" text-xl font-normal flex flex-col  text-center ">
          My introduction
        </h3>

        <div
          className=" flex max-lg:flex-col gap-8 py-6 lg:py-12
       xl:gap-12 justify-center  items-center min-h-fit w-fit"
        >
          <motion.img
            src="assets/pedrof.jpg"
            alt="pedrofelippe"
            className="h-[300px] lg:h-[350px] w-full lg:w-[350px] rounded-md lg:rounded-3xl border-2 object-cover"
          />

          <div className="w-full max-w-lg text-md font-extrathin ">
            <p>
              I'm a <span className="font-semibold">front-end developer</span>{" "}
              with experience since 2020, contributing to the creation of
              digital products for companies such as HP Inc and Furukawa
              Electric. <br /> <br />I use my technical skills to build to build
              user-friendly web apps and create RESTful APIs. I craft interfaces
              with{" "}
              <span className="font-semibold">React/Next.js/Typescript</span>.
              manage databases, handle UI/UX, all integrated with CI/CD
              pipelines.
              <br /> <br /> In my free time, I've been developing personal
              projects from scratch, overseeing the backend, frontend, UI/UX,
              marketing, and more. <br /> <br />
            </p>

            <Skills />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
