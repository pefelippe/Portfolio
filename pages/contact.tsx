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
      className="content-intern my-auto items-start text-start justify-center    "
    >
      <div className="flex w-full justify-between items-center text-center max-md:flex-col gap-5">
        <div className="flex flex-col gap-4 h-full justify-center ">
          <h3 className="section-subtitle text-5xl lg:text-6xl">
            Get in <span className="text-blue">Contact</span>
          </h3>
          <p className=" text-lg lg:text-2xl max-w-3xl text-gray-400">
            Have something in mind? I'm all ears.
          </p>
        </div>
        <MessageForm />
      </div>
    </motion.div>
  );
}

export default ContactContent;
