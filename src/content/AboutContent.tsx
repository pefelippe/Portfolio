/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Skills from "../components/Skills";

function AboutContent() {
  return (
    <motion.div className="flex flex-col justify-center gap-12 w-full mx-auto  max-w-7xl h-screen items-start   ">
      <div className="flex gap-6 md:gap-24 items-center relative  max-md:flex-col ">
        <motion.img
          initial={{ opacity: 0, x: -75 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.1 },
          }}
          src="/assets/avatar-pdr.png"
          alt="me"
          className="max-md:max-h-[250px]  w-full md:max-w-lg h-[600px] object-cover rounded-xl"
        />

        <motion.div
          initial={{ opacity: 0, y: -75 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="relative text-[#888]  font-extralight text-xl  gap-4 flex flex-col  h-full w-full"
        >
          <h1 className="text-5xl md:text-7xl text-[#222222] font-bold leading-[1.2]">
            About-me.
          </h1>

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
