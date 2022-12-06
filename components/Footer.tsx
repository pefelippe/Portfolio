import React from "react";
import SocialIcons from "./atoms/SocialIcons";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="p-4  flex items-center justify-center bg-[rgb(26,26,26)] ">
      <span className="text-sm text-gray-500 text-center">
        © 2022 Pedro Felippe.
      </span>
    </footer>
  );
}

export default Footer;
