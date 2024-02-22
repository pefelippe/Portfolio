import { GitHubLogoIcon } from "@radix-ui/react-icons";
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react";

import AnimatedBtn from "../src/components/animated/AnimatedBtn";
import MessageForm from "../src/components/MessageForm";

function ContactContent() {
  return (
    <motion.div className="h-full flex  items-center text-start justify-center min-h-screen bg-gray-900 text-white  ">
      <motion.div
        id="contact-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex w-full justify-between items-center text-center max-md:flex-col gap-5 max-w-screen-2xl mx-auto my-auto h-full  "
      >
        <div className="flex flex-col gap-4 h-full justify-center text-start ">
          <h3 className="section-subtitle text-5xl lg:text-6xl">
            Get in <span className="text-blue">Contact</span>
          </h3>
          <p className=" text-lg lg:text-2xl max-w-3xl text-gray-400">
            Have something in mind? I'm all ears.
          </p>
        </div>
        <MessageForm />
      </motion.div>
    </motion.div>
  );
}

export default ContactContent;
