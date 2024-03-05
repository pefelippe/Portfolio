import { motion } from "framer-motion";
import React from "react";

function about() {
  return (
    <div className="section w-full min-h-screen max-w-5xl mx-auto flex flex-col justify-start items-center  py-20 ">
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        className="firstTitle"
      >
        About
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.5 }}
        className="firstDesc"
      >
        Hey there! Discover more about me.
      </motion.p>

      <div className="flex max-md:flex-col  items-center gap-10  pt-20">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.25 }}
          className="rounded-md w-full max-md:max-h-[300px] md:w-[350px] object-cover"
          src="/assets/pedrof.jpg"
        />

        {/* <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.5 }}
          className=" font-bold text-4xl"
        >
          Pedro Felippe
        </motion.h1> */}

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.75 }}
          className="max-w-md text-lg mx-auto text-left leading-relaxed pt-2 dark:text-gray-100"
        >
          I am Pedro. Web Developer with 3+ years of experience in real
          projects, focused on Frontend development with a focus on React, Node,
          Next and Typescript. <br />
          <br /> I accumulated practical experience with microfrontends,
          performance monitoring, automated testing, server-side rendering
          (SSR), search engine optimization (SEO) and integration with cloud
          services such as Azure and AWS (Lambda, DynamoDB, S3). <br />
          <br />
        </motion.p>
      </div>
    </div>
  );
}

export default about;
