/* eslint-disable react/no-unescaped-entities */
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import {
  ArrowBigLeft,
  ArrowBigRight,
  ArrowLeft,
  ArrowRight,
  File,
  LinkedinIcon,
} from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

import AnimatedBtn from "../components/animated/AnimatedBtn";
import { Button } from "../components/ui/button";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="about-content"
      className="content-intern text-white min-h-[20vh] gap-6 xl:gap-20 justify-start text-start items-start lg:flex-row"
    >
      <motion.img
        src="./assets/avatar-pdr.png"
        className="max-h-[250px]  w-full lg:max-w-[450px] lg:max-h-[400px] rounded-xl shadow 
            max-md:object-cover object-cover  "
      />

      <div className="flex flex-col gap-5 justify-center h-full my-auto">
        {/* <h3 className="text-xl lg:text-2xl font-normal">Hey there, i am</h3> */}
        <p className="text-5xl lg:text-6xl  tracking-wide font-extrabold  text-blue">
          Pedro Felippe
        </p>
        <span className="text-base lg:text-lg max-w-3xl text-gray-300 font-extrathin">
          I have 3+ years of experience in real projects, focused on Web
          Development. I accumulated practical experience with microfrontends,
          performance monitoring, automated testing, server-side rendering
          (SSR), search engine optimization (SEO) and integration with cloud
          services such as Azure and AWS (Lambda, DynamoDB, S3).
        </span>

        <motion.div
          className="flex  top-0 bottom-0 h-full justify-center 
            items-center w-fit space-x-6 max-w-sm"
        >
          <ScrollLink to="contact-content" offset={-150}>
            <Button className="text-xl p-7 items-center gap-1">
              <p>Get in touch</p> <ArrowRight />
            </Button>
          </ScrollLink>
          <AnimatedBtn
            target="_blank"
            href="https://www.linkedin.com/in/pedro-felippe/"
          >
            <LinkedinIcon className="h-8 w-8" />
          </AnimatedBtn>

          <AnimatedBtn href="https://github.com/pefelippe">
            <GitHubLogoIcon className="h-8 w-8" />
          </AnimatedBtn>
        </motion.div>
      </div>
    </motion.div>
  );
}
