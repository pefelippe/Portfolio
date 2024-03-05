import { motion } from "framer-motion";
import React from "react";

function AboutSection() {
  return (
    <div className=" w-full flex flex-col justify-start gap-8 lg:gap-16  ">
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        className="firstTitle"
      >
        Hey, I am Pedro Felippe. Software Engineer, UI/UX Designer & Coffee
        Lover.
      </motion.p>

      <div className="flex max-lg:flex-col  items-start gap-10 lg:gap-24 ">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.75 }}
          className="max-w-3xl text-sm lg:text-xl text-left leading-normal dark:text-gray-100 "
        >
          My passion lies in creating software that solves real-world problems
          and positively impacts people’s lives. <br /> <br /> I accumulated
          practical experience with microfrontends, performance monitoring,
          automated testing, server-side rendering (SSR), search engine
          optimization (SEO) and integration with cloud services such as Azure
          and AWS (Lambda, DynamoDB, S3). <br /> <br />
          Feel free to shoot me an email at <b>pedfelippe@gmail.com</b>.
        </motion.p>
        <motion.div className="w-full flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1 }}
            className="w-full max-w-xl flex flex-col gap-4"
          >
            <h3 className="text-lg lg:text-2xl font-medium text-yellow-100">
              Frontend Tools
            </h3>
            <p className="text-sm lg:text-lg">
              React.Js, Next.Js, NextAuth, JavaScript (ES6+), TypeScript, Redux,
              Redux Toolkit, HTML5, Prisma.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1.5 }}
            className="w-full max-w-xl flex flex-col gap-4"
          >
            <h3 className="text-lg lg:text-2xl font-medium text-yellow-100">
              UI Libraries
            </h3>
            <p className="text-sm lg:text-lg">
              CSS3/SCSS/SASS, Tailwind CSS, Material UI, Framer
              Motion,Styled-Components Bootstrap, Chart.js.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutSection;
