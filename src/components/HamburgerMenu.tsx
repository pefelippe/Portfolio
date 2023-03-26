import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../constants";

type Props = {};

function HamburgerMenu({}: Props) {
  const [active, setActive] = useState<String>();
  const [toggle, setToggle] = useState<Boolean>(false);
  return (
    <>
      <ul className="max-sm:hidden text-xl  items-center text-white justify-start list-none flex gap-10 ">
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
                className=" px-full rounded-md hover:underline "
                href={`${navLink.id}`}
              >
                {navLink.title}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center w-full">
        <Image
          src={toggle ? "/assets/close.svg" : "/assets/menu.svg"}
          alt="menu"
          width="100"
          height="100"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 black-gradient absolute top-[60px]
             text-xl right-0 mx-4 my-2 items-center 
        text-center w-screen z-50  text-white bg-[#5865f2] transition-all`}
        >
          <ul className="mx-auto items-center h-[100vh] justify-start list-none flex  flex-col gap-20 py-28">
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
                    className="text-xl  px-full rounded-md hover:underline "
                    href={`${navLink.id}`}
                  >
                    {navLink.title}
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
