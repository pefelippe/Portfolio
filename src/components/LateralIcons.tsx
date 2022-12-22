import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

type Props = {};

export default function LateralIcons({}: Props) {
  return (
    <div className="flex space-x-2">
      <a className="cursor-pointer">
        <FaGithubSquare />
      </a>
      <a className="cursor-pointer">
        <FaLinkedin />
      </a>
    </div>
  );
}
