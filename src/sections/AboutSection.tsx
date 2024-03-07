import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

function AboutSection() {
  return (
    <div className=" w-full flex flex-col justify-start gap-10 lg:gap-20 ">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-14  lg:items-center">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 1 }}
          src="/assets/avatar-pdr.png"
          className="rounded-full lg:rounded-md w-fit lg:w-full h-full max-h-[120px] lg:max-h-[450px] object-cover"
        />

        <motion.div className="text-sm lg:text-[24px] text-left leading-normal dark:text-gray-100 items-start gap-6 flex flex-col max-w-3xl ">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="firstTitle text-blue"
          >
            Software Engineer, Web Developer & Coffee Lover.
          </motion.p>

          <motion.p
            className="text-gray-200 text-base lg:text-xl "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.75 }}
          >
            My passion lies in creating software that solves real-world problems
            and positively impacts people’s lives. <br /> <br /> I accumulated
            practical experience with microfrontends, performance monitoring,
            automated testing, server-side rendering (SSR), search engine
            optimization (SEO) and integration with cloud services such as Azure
            and AWS (Lambda, DynamoDB, S3). <br /> <br />
            Feel free to shoot me an email at{" "}
            <Link
              href={"mailto:pedfelippe@gmail.com"}
              className="hover:text-gray-500"
            >
              <b>pedfelippe@gmail.com</b>
            </Link>{" "}
            or{" "}
            <ScrollLink
              to="contact-container"
              className="hover:text-gray-500 font-bold cursor-pointer"
            >
              contact me above
            </ScrollLink>
            .
          </motion.p>
        </motion.div>
      </div>
      {/* <motion.div className="w-full flex flex-col md:grid md:grid-cols-3 gap-8 ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 1.25 }}
          className=" flex flex-col gap-2 w-full lg:max-w-sm  p-5 rounded bg-yellow-100/5"
        >
          <h3 className="text-xl lg:text-2xl font-medium text-yellow-200">
            Frontend Tools
          </h3>
          <p className="text-base  lg:text-lg font-normal ">
            React.Js, Next.Js, JavaScript (ES6+), TypeScript, Redux, Redux
            Toolkit, HTML5, Prisma.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 1.55 }}
          className="w-full flex flex-col gap-2 lg:max-w-sm   p-5 rounded bg-yellow-100/5"
        >
          <h3 className="text-xl lg:text-2xl font-medium text-yellow-200">
            UI Libraries
          </h3>
          <p className="text-base  lg:text-lg font-normal">
            CSS3/SCSS/SASS, Tailwind CSS, Material UI, Framer Motion,
            Styled-Components, Bootstrap, ShadcnUI, Chart.js
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 1.75 }}
          className="w-full flex flex-col gap-2 lg:max-w-sm   p-5 rounded bg-yellow-100/5"
        >
          <h3 className="text-xl lg:text-2xl font-medium text-yellow-200">
            Other Tech
          </h3>
          <p className="text-base lg:text-lg font-normal">
            Java, Selenium, Cypress, Python, OpenAPI, Firebase, Jest, Storybook,
            Github Actions, Docker
          </p>
        </motion.div>
      </motion.div> */}
    </div>
  );
}

export default AboutSection;
