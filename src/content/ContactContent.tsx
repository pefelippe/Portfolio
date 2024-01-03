/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import MessageForm from "../components/MessageForm";

function ContactContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center w-full mx-auto  max-w-7xl min-h-screen max-xl:max-w-3xl
      py-16 h-fit px-6 items-center relative  max-xl:flex-col "
    >
      <div className="relative h-full w-full flex justify-center gap-8 flex-col  items-center">
        <div className=" flex flex-col gap-4  h-full items-center justify-center ">
          <div className=" text-xl gap-4 flex flex-col text-center items-center justify-center max-w-3xl">
            <h1 className="text-5xl xl:text-6xl  font-bold leading-[1.2] max-w-xl w-fit ">
              I'm here to help bring your ideas to reality.
            </h1>

            <h3 className="text-[20px]  text-gray-300 w-fit">
              Drop me a message and{" "}
              <span className="underline underline-offset-4 decoration-blue">
                let's make things happen!
              </span>
            </h3>
          </div>
        </div>

        <MessageForm />
      </div>
    </motion.div>
  );
}

export default ContactContent;
