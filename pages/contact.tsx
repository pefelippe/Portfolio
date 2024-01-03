/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import MessageForm from "../src/components/MessageForm";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center w-full mx-auto  max-w-7xl  h-fit px-6 min-h-screen 
      items-center relative  max-xl:flex-col "
    >
      <div className="relative h-full w-full flex justify-center gap-6 lg:gap-20 max-lg:flex-col items-center ">
        <div className=" flex flex-col gap-4 lg:max-w-xl w-full h-full items-center justify-center ">
          <div className="w-full lg:max-w-2xl  text-xl gap-4 flex flex-col mb-4">
            <h1 className="text-4xl lg:text-6xl  font-bold leading-[1.2]  ">
              I'm here to help bring your online ideas to reality.
            </h1>

            <h3 className="w-full text-[16px] lg:text-[20px] lg:max-w-lg ">
              Drop me a message and let's{" "}
              <span className="underline underline-offset-4 decoration-blue">
                make things happen!
              </span>
            </h3>
          </div>
        </div>

        <MessageForm />
      </div>
    </motion.div>
  );
}

export default Contact;
