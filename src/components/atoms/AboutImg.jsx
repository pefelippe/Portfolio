import React from "react";
import { motion } from "framer-motion";

function AboutImg() {
  return (
    <motion.img
      alt="avatar-pefelippe"
      src="https://media.licdn.com/dms/image/D4D03AQEV32TdI5A69Q/profile-displayphoto-shrink_800_800/0/1671222118350?e=1678924800&v=beta&t=SsKPxFF7Ia_9k4gCv5ST4LsdW6jgz0ePpVziJRnv6gw"
      height={350}
      width={350}
      className="rounded-xl h-[250px] w-[250px] lg:h-[350px] lg:w-[350px]"
    />
  );
}

export default AboutImg;
