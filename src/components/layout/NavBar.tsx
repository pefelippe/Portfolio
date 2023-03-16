import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { styles } from "../../../styles/styles";
import { navLinks } from "../../constants";
import SocialLinks from "../SocialLinks";

const Navbar = () => {
  const [active, setActive] = useState<String>();
  const [toggle, setToggle] = useState<Boolean>(false);

  return (
    <nav
      className={`${styles.paddingX}  w-full flex items-center py-6 top-0 z-20 bg-primary `}
    >
      <div className="text-white w-full flex justify-between items-center max-w-7xl mx-auto">
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
        text-[1.8rem] "
          >
            Pedro Felippe
          </p>
        </Link>

        <SocialLinks />

        {/* <ul className="list-none hidden sm:visible sm:flex flex-row text-white transition-all gap-2">
          <Link
            className=" flex w-fit hover:underline items-center text-xl font-semibold
        text-center  text-[#fff] hover:text-[#5865f2] transition-all"
            href="/about"
          >
            <motion.span className="flex gap-2 text-md items-center justify-center px-2 rounded-md py-4 font-bold">
              <p>Quem sou?</p>
            </motion.span>
          </Link>
          <Link
            className=" flex w-fit hover:underline  gap-2 items-center text-xl font-semibold
        text-center rounded-full bg-[#fff] text-[#000] hover:bg-[#5865f2] hover:text-[#fff] transition-all border-[1px] border-[#5865f2]"
            href="/contact"
          >
            <motion.span className="flex gap-2 text-md items-center justify-center px-4 rounded-md py-4 font-bold">
              <p>Entre em contato</p>
            </motion.span>
          </Link>
        </ul> */}

        {/* <div className="sm:hidden flex flex-1 justify-end items-center">
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
                    <Link
                      className="text-5xl  px-full rounded-md hover:underline "
                      href={`${navLink.id}`}
                    >
                      {navLink.title}
                    </Link>
                  </li>
                );
              })} 
              <Link
                className=" flex w-fit hover:underline  gap-2 items-center text-xl font-semibold
        text-center rounded-full bg-[#fff] text-[#000] hover:bg-[#5865f2] hover:text-[#fff] transition-all border-[1px] border-[#5865f2]"
                href="/contact"
              >
                <motion.span className="flex gap-2 items-center justify-center px-6 rounded-md py-4 font-bold">
                  <p>Entre em contato</p>
                </motion.span>
              </Link>
            </ul>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
