/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Link from "next/link";

function ContactContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center w-full mx-auto  max-w-7xl py-32 max-xl:max-w-3xl
     h-fit px-6 items-center relative  max-xl:flex-col "
    >
      <div className="relative h-full w-full flex justify-between gap-8 flex-col  items-center">
        <div className=" flex flex-col gap-8 h-full items-center justify-between ">
          <div className=" text-xl gap-6 flex flex-col text-center items-center justify-center max-w-3xl">
            <h1 className="text-5xl xl:text-7xl  font-bold leading-[1.2] max-w-xl w-fit ">
              I'm here to help bring your ideas to reality.
            </h1>

            <Link
              href="/contact"
              className="bg-blue px-12 font-normal rounded-md py-3 text-2xl"
            >
              Let's chat!
            </Link>
          </div>
        </div>
        <></>
        {/* <MessageForm /> */}
      </div>
    </motion.div>
  );
}

export default ContactContent;
