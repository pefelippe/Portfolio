/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      className="flex flex-col w-full  justify-center  text-start
     min-h-screen text-white max-xl:px-6"
    >
      <motion.div className="flex justify-end flex-col mx-auto items-end gap-12 max-w-7xl w-full z-30">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl  font-normal tracking-normal leading-tight max-w-3xl"
        >
   
        </motion.h1>

        {/* <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.25 }}
          className="flex space-x-7 w-full items-start max-w-3xl text-[#121221] "
        >
          <AnimatedBtn
            target="_blank"
            href="https://www.linkedin.com/in/pedro-felippe/"
          >
            <Button
              variant="outline"
              className="flex items-center w-[150px] py-7 gap-2"
            >
              <FaLinkedin className="h-6 w-6" />
              <span className="text-xl">Linkedin</span>
            </Button>
          </AnimatedBtn>

          <AnimatedBtn href="https://github.com/pefelippe">
            <Button
              variant="outline"
              className="flex items-center w-[150px] py-6 gap-2"
            >
              <FaGithub className="h-6 w-6 " />
              <span className="text-lg">Github</span>
            </Button>
          </AnimatedBtn>
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
}
