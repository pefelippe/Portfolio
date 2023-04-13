import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRight, FaLink } from "react-icons/fa";

import { navLinks } from "../constants";
import SocialLinks from "./SocialLinks";

type Props = {};

function HamburgerMenu({}: Props) {
  const [active, setActive] = useState<String>("Home");
  const [toggle, setToggle] = useState<Boolean>(false);
  return (
    <>
      <div className="w-full max-md:hidden list-none text-xl  items-center  text-white flex justify-between">
        <div className="flex items-center gap-8">
          {navLinks.map((navLink) => {
            return (
              <li
                key={navLink.id}
                // className={` py-3  ${
                //   active === navLink.title
                //     ? "bg-blue hover:text-white rounded-full"
                //     : " text-secondary hover:text-blue"
                // }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(navLink.title);
                }}
              >
                <Link
                  className="py-3 rounded-full hover:underline cursor-pointer"
                  href={`${navLink.id}`}
                >
                  {navLink.title}
                </Link>
              </li>
            );
          })}
        </div>
        <SocialLinks />
      </div>

      <div className="md:hidden flex flex-1 justify-end items-center w-full ">
        <p className="text-2xl ">Pedro Felippe</p>

        <Image
          src={toggle ? "/assets/close.svg" : "/assets/menu.svg"}
          alt="menu"
          width="100"
          height="100"
          className={`${
            toggle ? "absolute" : ""
          } w-[28px] h-[28px] object-contain cursor-pointer z-50  top-8 right-10`}
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex flex-col"
          }  black-gradient absolute  z-40 pt-32 pb-20
             text-xl right-0 items-center top-0 min-h-fit text-center w-screen mx-auto 
              text-white bg-[#121212] transition-all `}
        >
          <ul className="mx-auto items-center  rounded-b-md justify-center list-none flex flex-col pb-20">
            {navLinks.map((navLink) => {
              return (
                <li
                  key={navLink.id}
                  className="py-4 px-4 w-[80vw] rounded-md transition-all text-white"
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(navLink.title);
                  }}
                >
                  <Link
                    className="w-full flex  gap-4  items-center justify-between text-4xl  p-4
                     rounded-md bg-blue hover:bg-blue/90 "
                    href={`${navLink.id}`}
                  >
                    {navLink.title}
                    <FaArrowRight />
                  </Link>
                </li>
              );
            })}
          </ul>
          <SocialLinks />
        </div>
      </div>
    </>
  );
}

export default HamburgerMenu;
