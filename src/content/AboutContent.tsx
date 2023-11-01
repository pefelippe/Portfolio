/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

function AboutContent() {
  return (
    <motion.div
      className="  flex  w-full items-center  justify-center   mx-auto  gap-6 lg:gap-20   pb-10 lg:py-20  bg-[#1d1b22] rounded-xl
       max-lg:flex-col text-start "
    >
      {/* <h1 className="text-5xl font-semibold text-white w-full max-w-md leading-[1.2]">
        I love to code solutions to enable the best of companies and people
      </h1> */}

      <motion.img
        src="/assets/eu.jpg"
        alt="me"
        className=" rounded-3xl w-full max-w-md"
      />

      <span className="text-[#B3AFC0] font-light text-xl   max-w-md max-lg:px-6">
        <h1 className="text-white text-3xl font-semibold mb-5">About me</h1>
        I have been coding digital products since 2017, such as web
        applications, PWAs, websites, e-commerce, and mobile apps that help
        organizations refine their online presence and grow. <br />
        <br />I specialize in Frontend development with a focus on web
        standards, UX, performance, accessibility, security, tests, and
        analytics. In the Backend, I work with cloud services, CI/CD, databases,
        and APIs integrations.
      </span>
    </motion.div>
  );
}

export default AboutContent;
