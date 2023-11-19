/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import MessageForm from "../components/MessageForm";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto flex flex-col w-full items-start  justify-center max-w-7xl gap-4 min-h-screen my-10"
    >
      <div className="w-full flex justify-between gap-6 md:gap-20 max-md:flex-col">
        <div className="flex flex-col justify-between">
          <div className="w-full max-w-xl  text-[#888] text-xl gap-4 flex flex-col mb-4">
            <h1 className="text-5xl md:text-7xl  font-bold leading-[1.2] text-[#222222] ">
              Contact-me.
            </h1>
            <h3 className="w-full max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
              adiqua minim veniam quis nostrud exercitation ullamco
            </h3>
          </div>

          <div className="flex gap-3  rounded-full text-[#222222] py-3 ">
            <motion.img
              src="/assets/vito.jpg"
              alt="me"
              className="rounded-full h-12 w-12"
            />
            <div className="flex flex-col justify-center ">
              <h3 className="font-medium text-sm">
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
