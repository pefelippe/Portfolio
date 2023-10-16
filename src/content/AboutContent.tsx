/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" mx-auto w-full flex text-white max-md:flex-col items-center justify-between max-w-6xl  max-xl:px-8  gap-20"
    >
      <h1 className="flex text-6xl font-bold w-full max-w-xl md:text-center ">
        I love to create solutions
      </h1>

      <p className="w-full text-xl text-gray-300">
        I have been coding digital products since 2017, such as web
        applications, PWAs, websites, e-commerce, and mobile apps that help
        organizations refine their online presence and grow.
        <br /> <br />I specialize in Frontend development with a focus on web
        standards, UX, performance, accessibility, security, tests, and
        analytics. In the Backend, I work with cloud services, CI/CD, databases,
        and APIs integrations.
      </p>
    </motion.div>
  );
}

export default AboutContent;
