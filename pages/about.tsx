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
      className="flex flex-col items-center justify-center w-full min-h-screen gap-8 px-6 py-20 mx-auto "
    >
      <div className="flex flex-col-reverse items-center gap-6 lg:flex-row lg:gap-32 text-start ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.6 }}
          className="text-sm lg:text-[32px] text-left leading-normal  items-start gap-5
         justify-center flex flex-col w-full "
        >
          <motion.h1 className="text-4xl tracking-tighter">
            Pedro Felippe
          </motion.h1>
          <motion.p className="max-w-xl text-sm text-gray-300">
            Experienced web developer with a proven track record since 2020,
            proficiently navigating the intricacies of developing robust and
            dynamic digital solutions. <br />
            <br />
            Specializing in a diverse array of projects including SaaS
            platforms, e-commerce websites, and captivating landing pages, I
            have honed my skills through collaborative efforts with
            multidisciplinary teams spanning the globe. <br />
            <br />
            My professional journey is marked by a commitment to excellence,
            consistently delivering high-quality, user-centric products that
            meet and exceed client expectations. Leveraging a blend of technical
            expertise and creative vision.
          </motion.p>

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

        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 1 }}
          src="/assets/pedrof.jpg"
          className="rounded-md h-[250px] w-[600px] lg:h-[600px] object-cover shadow"
        />
      </div>
    </motion.div>
  );
}

export default AboutSection;
