/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

function AboutContent() {
  return (
    <motion.div className="flex flex-col w-full items-center   ">
      <div className="flex max-lg:flex-col w-full lg:items-center gap-6 lg:gap-10 justify-center">
        <div className="flex flex-col text-start items-center text-gray-300 rounded-3xl  w-full  gap-8 max-w-4xl  ">
          <p className="w-full text-2xl  font-light ">
            I am Pedro Felippe. My passion lies in creating simple yet visually
            appealing UIs.
          </p>
          <p className="w-full  text-xl font-light  ">
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
