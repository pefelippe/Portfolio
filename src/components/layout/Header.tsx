import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { navLinks } from "../../constants";
import SocialLinks from "../SocialLinks";
import HamburgerMenu from "./../HamburgerMenu";

const Navbar = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <motion.nav
      className="absolute z-40  font-semibold  w-full  bg-[#171717] justify-between max-w-full
    h-[10vh]  mx-auto flex items-center max-lg:px-6  snap-start text-[#000] border-b"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=" h-full flex items-center w-full justify-between  max-w-7xl mx-auto text-white"
      >
        <Link
          href="/"
          className=" text-[1.8rem] font-semibold min-w-fit max-md:hover:text-white transition-all text-white "
        >
          Pedro Felippe
        </Link>
        <div className="max-md:hidden list-none text-gray-300 text-xl  flex items-center gap-4 ">
          {navLinks.map((navLink) => {
            return (
              <li
                key={navLink.id}
                className={` py-3  ${
                  id === navLink.title
                    ? "bg-blue hover:text-white rounded-full"
                    : " text-secondary hover:text-blue"
                }`}
              >
                <Link
                  className="rounded-full cursor-pointer px-6 py-3 hover:bg-blue hover:text-white transition-all"
                  href={`${navLink.id}`}
                >
                  {navLink.title}
                </Link>
              </li>
            );
          })}
        </div>
        <SocialLinks />
        <HamburgerMenu />
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
