import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { styles } from "../../../styles/styles";
import { navLinks } from "../../constants";

const Navbar = () => {
  const [active, setActive] = useState<String>();
  const [toggle, setToggle] = useState<Boolean>(false);

  return (
    <nav
      className={`${styles.paddingX} fixed w-full bg-[#000] flex items-center py-6 top-0 z-20 bg-primary `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          className="flex items-center gap-2"
          href="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p
            className="text-[#5865f2] text-center uppercase font-bold hover:text-[#5865f2]/90 transition-all
        text-[1.5rem] "
          >
            Pedro Felippe
          </p>
        </Link>

        <ul className="list-none hidden sm:visible sm:flex flex-row gap-10 text-white transition-all">
          {navLinks.map((navLink) => {
            return (
              <li
                key={navLink.id}
                className={`${
                  active === navLink.title ? "text-gray-200" : "text-secondary"
                } font-poppins font-medium text-[18px] hover:text-[#5865f2] transition-all`}
                onClick={() => {
                  setActive(navLink.title);
                }}
              >
                <Link href={`${navLink.id}`}>{navLink.title}</Link>
              </li>
            );
          })}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
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
            } p-6 black-gradient absolute top-[60px] text-2xl right-0 mx-4 my-2 items-center font-medium
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
                    <a
                      className="text-5xl  px-full rounded-md hover:underline "
                      href={`#${navLink.id}`}
                    >
                      {navLink.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
