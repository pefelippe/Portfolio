import { GitHubLogoIcon } from "@radix-ui/react-icons";
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import MessageForm from "../src/components/MessageForm";

function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}
      className="h-full grid grid-cols-2 gap-20 items-center text-start justify-center  max-w-7xl mx-auto min-h-screen"
    >
      <motion.img src="./assets/avatar-pdr.png" className="w-full rounded" />
      <div className="flex flex-col gap-12">
        <h1 className="text-6xl font-medium">
          Hello there, I’m Pedro Felippe!
        </h1>
        <span className="text-lg font-normal text-gray-700 dark:text-gray-300 ">
          I am based in Brazil, working as a Frontend Developer at{" "}
          <a
            href="https://www.atlantico.com.br/"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline decoration-blue text-blue"
          >
            Atlântico
          </a>
          .
          <br />
          <br /> I accumulated practical experience with microfrontends,
          performance monitoring, automated testing, server-side rendering
          (SSR), search engine optimization (SEO) and integration with cloud
          services such as Azure and AWS (Lambda, DynamoDB, S3).
          <br />
          <br /> If you would like to contact me, email me at{" "}
          <a
            href="mailto:pedfelippe@gmail.com"
            rel="noreferrer"
            className="font-medium underline decoration-blue text-blue"
          >
            pedfelippe@gmail.com
          </a>{" "}
          or connect via{" "}
          <a
            href="https://www.linkedin.com/in/pedro-felippe"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline decoration-blue text-blue"
          >
            linkedin
          </a>.
        </span>
      </div>
    </motion.div>
  );
}

export default AboutContent;
