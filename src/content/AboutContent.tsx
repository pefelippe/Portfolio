/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import Skills from "../components/Skills";

function AboutContent() {
  return (
    <motion.div className="  flex  w-full   mx-auto  gap-5 lg:gap-10  flex-col text-start max-w-5xl max-xl:px-6  ">
      <h1 className="text-white text-3xl lg:text-4xl font-semibold ">
        About me
      </h1>
      <div className="flex max-lg:flex-col gap-5 lg:gap-20 items-center relative max-lg:max-w-xl">
        <motion.img
          src="/assets/pedro.jpg"
          alt="me"
          className="max-lg:max-h-[250px]  w-full lg:max-w-[450px] h-[600px] object-cover rounded-3xl"
        />

        <div className="realative text-[#B3AFC0]  font-light text-xl  gap-6 flex flex-col justify-between h-full">
          <p>
            I've been developing digital products since 2018, including web
            applications, PWAs, websites, e-commerce solutions, and mobile apps
            that assist organizations in refining their online presence and
            fostering growth.
          </p>
          <p>
            My area of expertise is{" "}
            <span className="text-blue font-semibold">Web Development</span>.
            With a strong emphasis on key areas like{" "}
            <span className="font-semibold">
              user experience (UX), performance, accessibility, security,
              (CI/CD), databases and API integrations
            </span>
            .
          </p>
          <Skills />
        </div>
      </div>
    </motion.div>
  );
}

export default AboutContent;
