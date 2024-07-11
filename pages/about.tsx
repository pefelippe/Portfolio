import { motion } from "framer-motion";
import { GithubIcon, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, delay: 0.5 }}
      className="flex items-center justify-center w-full h-full gap-8 px-6 mx-auto max-w-7xl xl:gap-16 max-xl:flex-col"
    >
      <motion.img
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, delay: 1 }}
        src="/assets/avatar-pdr.png"
        className="object-cover w-full max-w-[10rem] rounded-full xl:rounded-md shadow xl:h-full xl:max-w-none"
      />
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, delay: 1 }}
        className="flex flex-col max-w-sm xl:max-w-xl gap-8 text-lg xl:text-2xl leading-[1.2] tracking-normal text-center xl:text-left"
      >
        <span>
          Since 2020, I have been coding digital solutions. Impacted millions of
          users with Web Applications, Websites, E-commerce Platforms, PWAs, and
          Mobile Apps.{" "}
        </span>
        <span>
          Playing a pivotal role in the efficiency of many companies, I helped
          increase their revenue. I specialize in Frontend development, focusing
          on web standards, UX, performance, accessibility, security, and
          analytics.
        </span>
        I also work on the Backend with APIs, cloud services, and CI/CD
        pipelines. I currently exploring AI, creating content and open source,
        and mentoring developers.
      </motion.div>
    </motion.div>
  );
}

export default AboutSection;
