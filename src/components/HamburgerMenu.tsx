import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRight, FaLink } from "react-icons/fa";

import { navLinks } from "../constants";
import SocialLinks from "./SocialLinks";

type Props = {};

function HamburgerMenu({}: Props) {
  const [active, setActive] = useState<String>();
  const [toggle, setToggle] = useState<Boolean>(false);
  return (
    <>
      <div className="max-lg:hidden text-xl  items-center text-white justify-start list-none flex gap-10 divider-x ">
        {navLinks.map((navLink) => {
          return (
            <li
              key={navLink.id}
              className={`py-4 ${
                active === navLink.title ? "text-white" : "text-secondary"
              }`}
              onClick={() => {
                setToggle(!toggle);
                setActive(navLink.title);
              }}
            >
              <Link
                className=" px-full rounded-full hover:underline "
                href={`${navLink.id}`}
              >
                {navLink.title}
              </Link>
            </li>
          );
        })}
      </div>

      <div className="lg:hidden flex flex-1 justify-end items-center w-full">
        <Image
          src={toggle ? "/assets/close.svg" : "/assets/menu.svg"}
          alt="menu"
          width="100"
          height="100"
          className="w-[28px] h-[28px] object-contain cursor-pointer z-50 absolute top-10 right-10"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex flex-col"
          }  black-gradient absolute 
             text-xl right-0 items-center top-0 h-screen min-h-fit text-center max-w-[80vw] w-[350px] z-40 mx-auto 
              text-white bg-[#101010]  transition-all  gap-10`}
        >
          <ul className="mx-auto items-center  rounded-b-md justify-center list-none flex  flex-col gap-5 pt-40">
            {navLinks.map((navLink) => {
              return (
                <li
                  key={navLink.id}
                  className={`py-4 w-[80vw] max-w-[300px] rounded-md transition-all text-white bg-blue hover:bg-blue/90 ${
                    active === navLink.title ? "text-white" : "text-gray-300"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(navLink.title);
                  }}
                >
                  <Link
                    className="w-full flex justify-between px-4 items-center text-2xl   "
                    href={`${navLink.id}`}
                  >
                    {navLink.title}
                    <FaArrowRight />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default HamburgerMenu;
