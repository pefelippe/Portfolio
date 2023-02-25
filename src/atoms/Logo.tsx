import Link from "next/link";
import React from "react";

type Props = {};

function Logo({}: Props) {
  return (
    <Link href="/" className="" target="">
      <p
        className="text-[#5865f2] text-center uppercase font-bold 
          text-[2rem] tracking-tighter text-black "
      >
        {" "}
        Pedro Felippe
      </p>
    </Link>
  );
}

export default Logo;
