/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Button } from "../components/ui/button";

export default function Hero() {
  return (
    <motion.div
      className="flex relative  w-full  justify-start items-center  text-start  max-w-7xl mx-auto  lg:gap-20 lg:min-h-screen 
       gap-10"
    >
      <motion.div className="flex justify-center flex-col h-full  items-start gap-8 max-w-7xl w-full z-30 max-lg:max-w-lg ">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl lg:text-6xl font-bold tracking-normal  max-w-3xl"
        >
          Hey there. I'm <span className="text-blue">Pedro Felippe</span>, a Web
          Developer based in Brazil.
        </motion.h1>

        <motion.h3
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className=" text-lg lg:text-xl font-thin leading-normal gap-4 flex flex-col max-w-2xl w-full  "
        >
          I use my technical skills in JavaScript to build user-friendly web
          apps and create RESTful APIs with Node and sometimes GraphQL.
        </motion.h3>
        {/* 
        <motion.h3
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className=" text-lg lg:text-xl font-thin leading-normal gap-4 flex flex-col max-w-3xl w-full  "
        >
          I use my technical skills in JavaScript to build user-friendly web
          apps and create RESTful APIs with Node and sometimes GraphQL. <br />
          <br />
          I'm enthusiastic about leveraging cloud providers to enhance web
          applications.
        </motion.h3> */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.25 }}
          className="flex max-lg:flex-col max-lg:space-y-4 lg:space-x-4 w-full items-center max-w-lg text-[#121221] "
        >
          <Link
            style={{
              width: "100%",
            }}
            activeClass="active"
            to="projects-container"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            <Button
              variant="secondary"
              className="flex items-center w-full  py-7 gap-2 bg-black text-white hover:bg-black/70"
            >
              <span className="text-xl">Projects</span>
            </Button>
          </Link>

          <Link
            style={{
              width: "100%",
            }}
            activeClass="active"
            to="contact-content"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            <Button
              variant="secondary"
              className="flex items-center w-full  py-7  gap-2"
            >
              <span className="text-xl">Contact</span>
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.img
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, delay: 1 }}
        src="/assets/pedrof.jpg"
        alt="pedro felippe"
        className="h-full max-h-[500px] rounded-md max-lg:hidden shadow "
      />
    </motion.div>
  );
}
