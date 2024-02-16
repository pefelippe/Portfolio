/* eslint-disable react/no-unescaped-entities */
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { File, LinkedinIcon } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="about-content"
      className="content-intern  h-full flex max-md:flex-col flex-col items-start justify-center w-full z-20  gap-8 mx-auto "
    >
      <h3 className="section-subtitle ">
        About <span className="text-blue">Me</span>
      </h3>
      <div className="flex max-md:flex-col gap-16 max-w-7xl text-lg items-center tracking-normal text-gray-900">
        <motion.img
          src="./assets/pedrof.jpg"
          className=" max-w-[350px] rounded-xl shadow border-2
            max-md:object-cover object-fit  "
        />
        <p>
          Hello! I'm Pedro Felippe and I'm a frontend developer, designer and
          teacher from Brazil. <br />
          <br />I have 3+ years of experience in real projects, focused on
          Frontend development with a focus on React, Next and Typescript. I
          accumulated practical experience with microfrontends, performance
          monitoring, automated testing, server-side rendering (SSR), search
          engine optimization (SEO) and integration with cloud services such as
          Azure and AWS (Lambda, DynamoDB, S3).
        </p>
      </div>
    </motion.div>
  );
}
