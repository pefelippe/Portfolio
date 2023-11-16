/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import Links from "../components/Links";

export default function About() {
  return (
    <motion.div
      className="flex  w-full text-start max-w-xl mx-auto
    justify-center items-start  gap-3  flex-col"
    >
      <motion.img
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        src="/assets/avatar-pdr.png"
        alt="me"
        className="w-16 h-16 lg:w-20 lg:h-20  object-fit rounded-full"
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col gap-3 max-w-3xl text-md font-normal"
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
        <p className="  ">
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
