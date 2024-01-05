/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "../components/ui/button";

export default function About() {
  return (
    <motion.div
      className="flex justify-start w-full mx-auto  py-16  xl:py-20  max-xl:flex-col h-fit  items-center gap-8 xl:gap-16">

      <motion.img
        initial={{ opacity: 0, x: -75 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75}}
        src="/assets/pedrof.jpg"
        alt="me"
        className="object-cover rounded-md w-full  max-w-[400px]  border max-md:max-h-32 max-md:rounded-full max-md:hidden"
      />
        <motion.div 
          initial={{ opacity: 0, y: 75 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration:0.75}} 
          className="flex flex-col w-full gap-6 max-w-5xl">

          <motion.h1 className="text-6xl  font-bold leading-[1.2]  tracking-tight">
            Hi. I am Pedro Felippe.
          </motion.h1>

          
          <motion.span
            className="text-xl font-regular w-full text-gray-700 max-w-2xl tracking-tight"
          >
            I've been coding simple, fast and easy to use web interfaces since 2018.
            I deal with cloud services, keeping everything connected, and making sure the databases work smoothly. <br/><br/><p>For more details, check my resume or contact-me.</p> 
          </motion.span>

          <motion.div className="flex gap-3 max-w-xl">
            <Button variant="outline" className="w-full py-6 text-lg font-medium hover:underline">
              <Link target="_blank" href="https://drive.google.com/file/d/1V5sxQbNz1tgaO3exTl3aTvql7l8qxl2r/view?usp=sharing">
                Resume
              </Link>
            </Button>
            <Button className="w-full py-6 text-lg font-medium hover:underline">Contact</Button>
          </motion.div>


        {/* <Skills /> */}

        </motion.div>
    </motion.div>
  );
}
