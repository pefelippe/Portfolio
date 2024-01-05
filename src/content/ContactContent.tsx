/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import Link from "next/link";
import { Button } from "../components/ui/button";

function ContactContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-start w-full  max-xl:max-w-3xl
     h-fit px-6 items-start relative  max-xl:flex-col "
    >
      <div className="relative h-full w-full flex justify-center gap-5 flex-col items-center">
        <h1 className="text-4xl xl:text-6xl  font-bold leading-[1.2] max-w-3xl w-fit text-center">
          I'm here to help bring your ideas to <span className="underline underline-offset-4 decoration-blue">reality</span>.
        </h1>
        <Button  className=" py-7 px-12 text-lg font-medium hover:underline w-fit">
          <Link href="/contact">
            Contact-me!
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}

export default ContactContent;
