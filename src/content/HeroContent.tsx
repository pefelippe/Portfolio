/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Links from "../components/Links";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col  items-center mx-auto  w-full
    text-center leading-none  justify-center pt-40 gap-4"
    >
      <div className=" flex flex-col text-center items-center ">
        <p className="text-[1.4rem]   text-gray-100 tracking-[5px] md:tracking-[10px] font-normal mb-4 ">
          FULL-STACK DEVELOPER
        </p>
        <p
          className="text-[4rem] text-gray-900
         font-bold mb-4"
        >
          Pedro Felippe
        </p>
        <p className="max-w-lg  text-[1.3rem]  text-gray-100  font-normal  leading-[1.2] mb-2 ">
          I am developer where passion lies in creating simple yet visually
          appealing interfaces.
        </p>
      </div>
      <Links />

      <motion.img
        src="/assets/avatar-pdr.png"
        alt="me"
        className="object-fit items-center max-w-[250px] mt-6 mb-10
        flex-shrink-1 object-cover transition-all flex  rounded-full "
      />
    </motion.div>
  );
}
