import { motion } from "framer-motion";
import { GithubIcon, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, delay: 1.5 }}
      className=" w-full flex flex-col justify-center items-start gap-8  mx-auto  py-10  section  min-h-screen"
    >
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center text-start ">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 1 }}
          src="/assets/pedrof.jpg"
          className="rounded-md h-[280px] w-full lg:h-[650px] object-cover shadow"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 1.6 }}
          className="text-sm lg:text-[32px] text-left leading-normal  items-start gap-8
         justify-center flex flex-col w-full "
        >
          <motion.h1 className="firstTitle">About me</motion.h1>
          <motion.p className="text-[#666] text-base md:text-lg font-normal max-w-2xl">
            A web developer working professionally since 2020 developing
            responsive and dynamic interfaces. Experience in a different range
            of projects, including SaaS platforms, e-commerce, and landing
            pages. Collaboration with international multidisciplinary teams.
            <br />
            <br /> I have technical knowledge with Javascript development
            (React, Angular, Vue, Node, Typescript). Integration with Rest and
            GraphQL APIs (Apollo). Connection to SQL and NO SQL databases;
            Containerization with Docker and Kubernetes. Unit and integration
            tests with Jest, React-Testing-Library and Cypress. Experience in
            Microfrontends. <br />
            <br />I am currently specializing in creating serverless
            applications with Node, AWS (Lambda, DynamoDB, CloudFront, SNS, SQS,
            S3, API Gateway) and microservices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1.25 }}
            className="flex justify-center items-center w-fit space-x-6 text-base tracking-widest"
          >
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/pedro-felippe/"
              className={`tracking-wide hover:text-blue`}
            >
              <Linkedin className="h-8 w-8" />
            </Link>

            <Link
              target="_blank"
              href="https://github.com/pefelippe"
              className={`tracking-wide hover:text-blue`}
            >
              <GithubIcon className="h-8 w-8" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AboutSection;
