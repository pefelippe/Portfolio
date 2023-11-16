/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex  w-full  mx-auto text-center lg:text-start max-lg:flex-col
    justify-center items-center gap-3 lg:gap-10"
    >
      <motion.img
        initial={{ y: -25 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5 }}
        src="/assets/avatar-pdr.png"
        alt="me"
        className="max-lg:max-h-[150px] max-lg:max-w-[150px]  w-full max-w-xs object-fit rounded-full lg:rounded-lg"
      />
      <motion.div
        initial={{ y: 25 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5 }}
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
        <p className="  ">
          With a strong emphasis on key areas like{" "}
          <span className="">
            user experience (UX), performance, accessibility, security, (CI/CD),
            databases and API integrations
          </span>
          .
        </p>
      </motion.div>
    </motion.div>
  );
}
