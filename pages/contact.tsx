/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import MessageForm from "../src/components/MessageForm";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col max-w-5xl mx-auto  relative w-full h-full min-h-fit  
      max-xl:px-6 gap-20 xl:gap-32 py-10 xl:py-20 xl:pt-32 mt-24 "
    >
      <div className="relative h-full w-full flex justify-start gap-6
       lg:gap-16 flex-col items-center text-center ">
        <div className=" flex flex-col gap-4 max-w-3xl 
        w-full h-full items-center justify-center  text-start ">
          <div className="w-full text-xl gap-6 flex flex-col mb-4">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight  ">
              Get in touch 
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
