/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Skills from "../components/Skills";

function AboutContent() {
  return (
    <motion.div
      className="  flex  w-full items-center  justify-start   mx-auto   overflow-hidden  bg-[#1d1b22] rounded-3xl
       max-md:flex-col text-start max-w-5xl  "
    >
      <motion.img
        src="/assets/pedro.jpg"
        alt="me"
        className="  w-full md:max-w-sm max-md:max-h-[250px] object-cover"
      />

      <div className="text-[#B3AFC0] font-light text-lg px-5 xl:px-10 gap-4 flex flex-col py-4 ">
        <h1 className="text-white text-3xl font-semibold ">Whoami?</h1>
        <p>
          I've been developing digital products since 2018, including web
          applications, PWAs, websites, e-commerce solutions, and mobile apps
          that assist organizations in refining their online presence and
          fostering growth.
        </p>
        <p>
          My area of expertise is{" "}
          <span className="text-blue font-semibold">Web Development</span>. With
          a strong emphasis on key areas like{" "}
          <span className="font-semibold">
            user experience (UX), performance, accessibility, security, (CI/CD),
            databases and API integrations
          </span>
          .
        </p>
        <Skills />
      </div>
    </motion.div>
  );
}

export default AboutContent;
