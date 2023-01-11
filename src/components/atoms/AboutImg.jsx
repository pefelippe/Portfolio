import React from "react";
import { motion } from "framer-motion";

function AboutImg() {
  return (
    <motion.img
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.1 },
      }}
      initial={{
        opacity: 0,
        x: -200,
      }}
      transition={{
        duration: 0.5,
      }}
      whileInView={{ opacity: 1, x: 0 }}
      alt="avatar-pefelippe"
      src="https://media.licdn.com/dms/image/D4D03AQEV32TdI5A69Q/profile-displayphoto-shrink_800_800/0/1671222118350?e=1678924800&v=beta&t=SsKPxFF7Ia_9k4gCv5ST4LsdW6jgz0ePpVziJRnv6gw"
      height={350}
      width={350}
      className="rounded-xl h-[250px] w-[250px] lg:h-[350px] lg:w-[350px] shadow-2xl"
    />
  );
}

export default AboutImg;
