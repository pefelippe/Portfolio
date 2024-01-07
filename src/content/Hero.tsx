/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div className="flex justify-start w-full  h-fit  max-md:flex-col gap-4 md:gap-10 ">
      <motion.div className="flex flex-col w-full gap-6 justify-start text-start max-w-3xl">
        {/* <motion.img
          src="/assets/avatar-pdr.png"
          alt="pedro felippe"
          className="border rounded-full h-32 w-32 "
        /> */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl xl:text-8xl font-bold leading-[1.2] tracking-tight"
        >
          Hey. I'm Pedro Felippe.👋
        </motion.h1>

        <motion.h3
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-2xl text-gray-500 max-w-xl "
        >
          Creating simple, fast and easy to use web interfaces since 2018.
        </motion.h3>

        {/* <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay:1}}  
          className="flex gap-4 items-center mx-auto">
            <AnimatedBtn target="_blank" href="https://www.linkedin.com/in/pedro-felippe/">
              <Button className="p-5 w-md w-full font-medium flex items-center gap-2 text-lg"><FaLinkedin className="h-7 w-7"/>Linkedin</Button>
            </AnimatedBtn>

            <AnimatedBtn  href="https://github.com/pefelippe">
              <Button variant={`secondary`} className="flex p-6 min-w-[155px]  items-center gap-2 text-lg"><FaGithub className="h-6 w-6 "/>Github</Button>
            </AnimatedBtn>
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
}
