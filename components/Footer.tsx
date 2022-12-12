import { EnvelopeIcon } from "@heroicons/react/24/solid";
import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className=" bottom-0 w-screen p-5  flex items-center justify-around bg-[#161616fa] text-white snap-start ">
      <span className="text-sm text-gray-100 text-center">
        Copyright © 2022 Pedro Felippe.
      </span>
      <div className="flex space-x-4">
        <a className="cursor-pointer">
          <FaGithubSquare className="h-10 w-10" />
        </a>
        <a className="cursor-pointer">
          <FaLinkedin className="h-10 w-10" />
        </a>
        <a className="cursor-pointer">
          <FaLinkedin className="h-10 w-10" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
