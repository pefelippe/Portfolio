/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

function AboutContent() {
  return (
    <motion.div className="flex flex-col w-full items-start ">
      <div className="leading-1 gap-5 flex flex-col justify-start items-start text-white ">
        <h1 className="text-[2.4rem]  text-white leading-tight font-bold  max-w-xl sm:text-5xl bg-blue p-2">
          About
        </h1>
        <h3 className="text-gray-300 mb-10  text-xl">
          Discover more about me.
        </h3>
      </div>

      <div className="flex max-xl:flex-col w-full xl:items-center  gap-10 md:gap-40">
        <motion.img
          src="/assets/avatar-pdr.png"
          alt="me"
          className="max-md:h-32 max-md:w-32  max-md:rounded-full md:h-full  rounded-md"
        />
        <div className="flex flex-col text-start items-center text-white  rounded-3xl  w-full  gap-8 max-w-5xl  ">
          <p className="w-full text-2xl md:text-4xl  font-medium  ">
            👋 Hey. I am Pedro Felippe. My passion lies in creating simple yet
            visually appealing UIs.
          </p>
          <p className="w-full text-xl font-light  ">
            My professional journey has revolved around crafting digital
            products that encompass web applications, PWAs, websites, e-commerce
            platforms, and mobile apps.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutContent;
