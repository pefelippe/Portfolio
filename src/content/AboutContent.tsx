/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

function AboutContent() {
  return (
    <motion.div
      className="  flex  w-full items-center  justify-start   mx-auto   overflow-hidden  bg-[#1d1b22] rounded-3xl
       max-md:flex-col text-start max-w-5xl  "
    >
      {/* <h1 className="text-5xl font-semibold text-white w-full max-w-md leading-[1.2]">
        I love to code solutions to enable the best of companies and people
      </h1> */}

      <motion.img
        src="/assets/eu.jpg"
        alt="me"
        className="  w-full md:max-w-sm max-md:max-h-[250px] object-cover"
      />

      <div className="text-[#B3AFC0] font-light text-xl px-6 gap-4 flex flex-col py-6 ">
        <h1 className="text-white text-3xl font-semibold ">Whoami?</h1>
        <p>
          I've been developing digital products since 2018, including web
          applications, PWAs, websites, e-commerce solutions, and mobile apps
          that assist organizations in refining their online presence and
          fostering growth.
        </p>
        <p>
          My area of expertise is{" "}
          <span className="text-blue font-medium">Web Development</span>, with a
          strong emphasis on key areas like web standards, user experience (UX),
          performance optimization, accessibility, security, continuous
          integration/continuous deployment (CI/CD), databases, and API
          integrations.
        </p>
      </div>
    </motion.div>
  );
}

export default AboutContent;
