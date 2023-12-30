/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import MessageForm from "../src/components/MessageForm";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between w-full mx-auto  max-w-7xl  h-fit pt-[25vh] px-6 max-h-[80vh] min-h-fit
      items-center relative  max-xl:flex-col "
    >
      <div className="relative h-full w-full flex justify-between gap-6 lg:gap-20 max-lg:flex-col items-center ">
        <div className="relative flex flex-col justify-center lg:max-w-xl w-full h-full ">
          <div className="w-full lg:max-w-2xl  text-[#888] text-xl gap-4 flex flex-col mb-4">
            <h1 className="text-4xl lg:text-6xl  font-bold leading-[1.2] text-[#f9f9f9] ">
              Contact-me.
            </h1>

            <h3 className="w-full text-[16px] lg:text-[20px] lg:max-w-lg ">
              I'm here to help bring your online ideas to reality. Drop me a
              message and let's make your web dreams happen!
            </h3>
          </div>

          <div
            className="flex gap-3  rounded-full text-[#f9f9f9] w-fit 
           max-lg:mx-auto bg-[#181818] justify-center items-center mt-auto"
          >
            <motion.img
              src="/assets/vito.jpg"
              alt="me"
              className="rounded-full h-14 w-14"
            />
            <div className="flex flex-col justify-center pr-6 ">
              <h3 className="font-medium text-base lg:text-md">
                I’m gonna make him an offer he can’t refuse.
              </h3>
              {/* <h3 className="font-bold text-sm">Vito Corleone</h3> */}
            </div>
          </div>
        </div>

        <MessageForm />
      </div>
    </motion.div>
  );
}

export default Contact;
