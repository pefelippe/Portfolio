import { motion } from "framer-motion";

import Skills from "../src/components/Skills";

export default function Home() {
  return (
    <motion.div className="flex flex-col justify-start gap-10 w-full mx-auto h-fit max-w-5xl mt-[10vh] min-h-[90vh] items-center lg:items-start py-12 max-lg:px-6">
      <div className="flex gap-6 lg:gap-16 items-center relative max-lg:max-w-xl max-lg:mx-auto max-lg:flex-col ">
        <motion.img
          initial={{ opacity: 0, x: -75 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.1 },
          }}
          src="/assets/pedrof.jpg"
          alt="me"
          className="max-lg:max-h-[220px]  w-full lg:max-w-[450px] h-[650px] object-cover rounded-xl"
        />

        <motion.div
          initial={{ opacity: 0, y: -75 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="relative text-gray-100  font-light text-xl  gap-6 flex flex-col  h-full "
        >
          <h1 className="font-thin  text-gray-300 text-4xl">About me</h1>
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

          <Skills />
        </motion.div>
      </div>
    </motion.div>
  );
}
