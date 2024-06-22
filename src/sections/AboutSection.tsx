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
      className="flex flex-col items-start justify-center w-full gap-8 "
    >
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-20 text-start ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 1.6 }}
          className="text-sm lg:text-[32px] text-left leading-normal  items-start gap-8
         justify-center flex flex-col w-full "
        >
          <motion.h1 className="text-3xl font-black md:text-5xl text-end">
            About me
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
            <motion.p className=" text-base font-normal text-[#d4d4d8] ">
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
              applications with Node, AWS (Lambda, DynamoDB, CloudFront, SNS,
              SQS, S3, API Gateway) and microservices.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1.25 }}
            className="flex items-center justify-center space-x-6 text-base tracking-widest w-fit"
          >
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/pedro-felippe/"
              className={`tracking-wide hover:text-blue`}
            >
              <Linkedin className="w-8 h-8" />
            </Link>

            <Link
              target="_blank"
              href="https://github.com/pefelippe"
              className={`tracking-wide hover:text-blue`}
            >
              <GithubIcon className="w-8 h-8" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AboutSection;
