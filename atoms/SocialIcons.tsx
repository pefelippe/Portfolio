import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function SocialIcons({}: Props) {
  return (
    <div className="flex ">
      <SocialIcon
        url="https://github.com/pefelippe"
        fgColor="#f9fafb"
        bgColor="transparent"
        className="socialMediaIcon"
      />

      <SocialIcon
        url="https://www.linkedin.com/in/pedro-felippe"
        fgColor="#f9fafb"
        bgColor="transparent"
        className="socialMediaIcon"
      />

      <SocialIcon
        url=""
        fgColor="#f9fafb"
        bgColor="transparent"
        className="socialMediaIcon"
      />
    </div>
  );
}
