/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

function AboutContent() {
  return (
    <motion.div
      className="flex flex-col justify-start gap-12 w-full mx-auto h-fit max-w-5xl
      items-center lg:items-start "
    >
      <div className="flex gap-6 lg:gap-[10vh] lg:items-center relative max-lg:flex-col ">
        <motion.div
          initial={{ opacity: 0, x: 75 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative text-[#888]  font-light text-xl  gap-6 flex flex-col  h-full "
        >
          <h1 className="font-medium  text-white text-3xl">Who am i?</h1>
          <p> My name is Pedro Felippe. A Web Developer from Brazil. </p>
          <p>
            I have been developing digital products since 2018, including web
            applications, PWAs, websites, e-commerce solutions, and mobile apps
            that assist organizations in refining their online presence and
            fostering growth.
          </p>
          <p className="mb-auto">
            With a strong emphasis on key areas like{" "}
            <span className="">
              user experience (UX), performance, accessibility, security,
              (CI/CD), databases and API integrations
            </span>
            .
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AboutContent;
