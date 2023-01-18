import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import AnimatedBtn from "./../components/motion/AnimatedBtn";

import React from "react";

type Props = {};

function Footer({}: Props) {
  const year = new Date().getFullYear();
  return (
    <footer className="  px-8 divide-y-2  py-4 snap-center ">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between py-4">
          <span className="flex text-sm xl:text-base">
            Copyright © {year} Pedro Felippe.
          </span>
          <div className="flex gap-4">
            <AnimatedBtn
              className="w-fit rounded-xl text-lg font-semibold"
              href="https://github.com/pefelippe"
            >
              <FaGithub className=" h-7 w-7  hover:text-[#5865f2] " />
            </AnimatedBtn>

            <AnimatedBtn
              className="w-fit rounded-xl  text-lg font-semibold"
              href="https://www.linkedin.com/in/pedro-felippe/"
            >
              <FaLinkedinIn className=" h-7 w-7  hover:text-[#5865f2] " />
            </AnimatedBtn>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
