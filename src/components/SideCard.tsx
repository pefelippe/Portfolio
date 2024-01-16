import { GitHubLogoIcon } from "@radix-ui/react-icons";
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react";

import AnimatedBtn from "../components/animated/AnimatedBtn";
import { Logo } from "../components/layout/Header";
import { Button } from "./ui/button";

export default function SideCard() {
  return (
    <motion.div
      id="about-content"
      className="flex flex-col gap-4 items-center px-10 justify-center h-full bg-[#101010] 
       min-h-screen  text-[#fff] lg:fixed max-w-xl"
    >
      <div className="w-full fixed left-0 top-0 right-0 p-6">
        <Logo />
      </div>
      <motion.img
        src="assets/avatar-pdr.png"
        alt="pedrofelippe"
        className="flex-shrink-1 object-cover relative h-full max-h-[180px] rounded-full "
      />
      <div className="flex lex-col lg:gap-5 items-center text-center  justify-center">
        <div className="flex gap-6 flex-col w-full  ">
          <h3 className="section-subtitle text-white  lg:text-6xl  mx-auto">
            A <span className="">frontend developer</span> based in Brazil.
          </h3>
          <p className="text-lg lg:text-xl font-normal leading-relaxed mx-auto text-gray-300 max-w-md">
            Dedicated to solve complex problems for companies using simple and
            well-executed solutions.
          </p>
          <div className="flex items-center gap-6 justify-center ">
            {/* <Button className="w-full text-xl py-6">Contact-me</Button> */}
            <AnimatedBtn
              target="_blank"
              href="https://www.linkedin.com/in/pedro-felippe/"
            >
              <LinkedinIcon className="h-9 w-9 hover:text-blue" />
            </AnimatedBtn>

            <AnimatedBtn href="https://github.com/pefelippe">
              <GitHubLogoIcon className="h-9 w-9 hover:text-blue" />
            </AnimatedBtn>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
