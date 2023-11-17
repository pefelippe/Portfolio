/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import Links from "../components/Links";

export default function About() {
  return (
    <motion.div
      className="flex  w-full  mx-auto text-center lg:text-start max-lg:flex-col
    justify-center items-center gap-3 lg:gap-10"
    >
      <motion.img
        src="/assets/avatar-pdr.png"
        alt="me"
        className="max-lg:max-h-[150px] max-lg:max-w-[150px]  w-full max-w-xs object-fit rounded-full lg:rounded-lg  transition-all"
      />
      <motion.div
        initial={{ x: 75 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-2 text-md font-normal max-w-xl "
      >
        <span className="text-3xl md:text-4xl  font-medium leading-[1.2] ">
          Pedro Felippe <br />
        </span>
        <h3 className="text-xl  text-[#888] font-normal ">
          Passion in creating simple yet visually appealing UIs.
        </h3>

        <p className="   ">
          I have been developing digital products since 2018, including web
          applications, PWAs, websites, e-commerce solutions, and mobile apps
          that assist organizations in refining their online presence and
          fostering growth.
        </p>
        <p className=" mb-2 ">
          With a strong emphasis on key areas like{" "}
          <span className="">
            user experience (UX), performance, accessibility, security, (CI/CD),
            databases and API integrations
          </span>
          .
        </p>
        <Links />
      </motion.div>
    </motion.div>
  );
}
