/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Image from "next/image";

function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center w-full mx-auto gap-8 items-start relative  flex-col "
    >
      <motion.h1
        initial={{ y: 75 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[40px] xl:text-6xl  font-bold tracking-tighter font-mono"
      >
        Who am i.
      </motion.h1>

      <motion.div className="flex justify-start w-full  h-fit mx items-center max-md:flex-col gap-8 md:gap-16  ">
        <Image
          src="/assets/pedrof.jpg"
          alt="pedro felippe"
          width={350}
          height={350}
          className="flex-shrink-0 object-cover border w-full max-w-md  rounded-3xl 
          "
        />

        <motion.div className="flex flex-col justify-center w-full  items-center max-w-3xl">
          <motion.h3
            initial={{ y: 75, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className=" text-2xl  leading-normal tracking-tighter "
          >
            I'm a Full Stack Developer based in Brazil who's been building
            industry utilized applications since 2018.
            <br />
            <br /> Since then, I've worked in companies and taken on freelance
            projects and consulting for clients. <br />
            <br />
            My focus is on finding the best ways to enhance user experience and
            create reusable, scalable, and testable interfaces. <br />
            <br />
          </motion.h3>
          {/* <AnimatedBtn target="_blank" href="https://drive.google.com/file/d/1V5sxQbNz1tgaO3exTl3aTvql7l8qxl2r/view?usp=sharing">
                <Button variant="outline" className="mx-auto w-full py-7 px-24 font-semibold hover:underline border text-lg xl:text-xl max-w-md">
                  <p>Resume</p>
                </Button>
              </AnimatedBtn> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default AboutContent;
