import { GitHubLogoIcon } from "@radix-ui/react-icons";
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import MessageForm from "../src/components/MessageForm";

function ContactContent() {
  return (
    <motion.div className="h-full grid grid-cols-2 gap-20 items-center text-start justify-center  dark:bg-gray-900 dark:text-white pt-32 max-w-7xl mx-auto">
      <motion.img src="./assets/avatar-pdr.png" className="w-full" />
      <div className="flex flex-col gap-12">
        <h1 className="text-6xl font-medium">
          Hello there, I’m Pedro Felippe!
        </h1>
        <span className="text-lg font-normal">
          Currently I am based in Seattle working as a Product Designer at
          Microsoft, previously at Airbnb. I graduated from the University of
          Washington with a Bachelors in Interaction Design in 2020.
          <br />
          <br /> My focus is predominantly product design, but I also dabble in
          visual design, illustration, and I love making icons and pixel art!
          New technology, such as blockchain, big data, and augmented reality
          excites me!
          <br />
          <br /> I hope to apply design thinking to harness the power of
          innovations like these to help create a better future for everyone.{" "}
          <br />
          <br /> If you would like to reach me, or maybe even meet for some
          coffee (or boba!), email me at clairedycat.kantner@gmail.com
        </span>
      </div>
    </motion.div>
  );
}

export default ContactContent;
