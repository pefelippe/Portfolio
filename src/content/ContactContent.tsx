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
      className="flex justify-start w-full mx-auto max-w-xl h-fit  items-center relative  max-xl:flex-col "
    >
      <div className="relative h-full w-full flex justify-center gap-5 flex-col items-center">
        <div className="text-5xl  font-bold leading-[1.2] max-w-4xl w-fit text-center ">
          Bring your ideas to <span className="underline underline-offset-4 decoration-blue">reality.</span>
        </div>
        <Button  className=" w-fit py-6 px-9 text-lg font-semibold hover:underline  font-mono">
          <Link href="/contact">
            Contact-me
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}

export default ContactContent;
