import { GitHubLogoIcon } from "@radix-ui/react-icons";
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react";

import AnimatedBtn from "../src/components/animated/AnimatedBtn";
import MessageForm from "../src/components/MessageForm";

function ContactContent() {
  return (
    <motion.div
      id="contact-content"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="content-intern my-auto items-start text-start justify-center gap-6 min-h-screen  "
    >
      <div className="flex w-full justify-between items-center text-center max-lg:flex-col max-lg:gap-5">
        <div className="flex flex-col gap-4 h-full justify-center ">
          <h3 className="section-subtitle text-5xl lg:text-6xl">
            Get in <span className="text-blue">Contact</span>
          </h3>
          <p className=" text-lg lg:text-2xl max-w-xl text-gray-400">
            Have something in mind? Questions, ideas, or just want to say hi?
            I'm all ears.
          </p>

          <motion.div
            className="flex  top-0 bottom-0 h-full justify-center 
            items-center w-full space-x-8 "
          >
            <AnimatedBtn
              target="_blank"
              href="https://www.linkedin.com/in/pedro-felippe/"
            >
              <LinkedinIcon className="h-9 w-9 hover:text-blue" />
            </AnimatedBtn>

            <AnimatedBtn href="https://github.com/pefelippe">
              <GitHubLogoIcon className="h-9 w-9 hover:text-blue" />
            </AnimatedBtn>
          </motion.div>
        </div>
        <MessageForm />
      </div>
    </motion.div>
  );
}

export default ContactContent;
