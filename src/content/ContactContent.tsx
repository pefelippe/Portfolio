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
      className="flex justify-start w-full  max-xl:max-w-3xl h-fit  items-start relative  max-xl:flex-col "
    >
      <div className="relative h-full w-full flex justify-center gap-5 flex-col items-start">
        <h1 className="text-5xl xl:text-6xl  font-bold leading-[1.2] max-w-3xl w-fit text-start ">
        <span className="underline underline-offset-4 decoration-blue">Contact</span> me to bring your ideas to reality.
        </h1>
        <Button  className=" py-7 px-16 text-lg font-medium hover:underline w-fit ">
          <Link href="/contact">
            Contact
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}

export default ContactContent;
