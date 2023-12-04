/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import MessageForm from "../components/MessageForm";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto flex flex-col w-full items-center lg:items-center
       max-lg:py-5 justify-center max-w-7xl gap-4 h-fit "
    >
      <div className="relative h-full w-full flex justify-between gap-6 lg:gap-20 max-lg:flex-col items-center ">
        <div className="relative flex flex-col justify-center lg:max-w-xl w-full h-full ">
          <div className="w-full lg:max-w-2xl  text-[#888] text-xl gap-4 flex flex-col items-start mb-4">
            <h1 className="text-4xl lg:text-6xl  font-bold leading-[1.2] text-[#222222] ">
              Contact-me.
            </h1>

            <h3 className="w-full xl:max-w-lg ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
              adiqua minim veniam quis nostrud exercitation ullamco
            </h3>
          </div>

          <div className="flex gap-3  rounded-full text-[#222222] py-3  ">
            <motion.img
              src="/assets/vito.jpg"
              alt="me"
              className="rounded-full h-12 w-12"
            />
            <div className="flex flex-col justify-center ">
              <h3 className="font-medium text-sm lg:text-md">
                - "I’m gonna make him an offer he can’t refuse."
              </h3>
              <h3 className="font-bold text-sm">Vito Corleone</h3>
            </div>
          </div>
        </div>

        <MessageForm />
      </div>
    </motion.div>
  );
}

export default Contact;
