import { motion } from "framer-motion";
import React from "react";

type IExperienceCard = {
  title: string;
  company: string;
  dateInit?: string;
  dateEnd?: string;
  imgUrl: string;
  sumarryPoints?: Array<String>;
};

function ExperienceCard({
  title,
  company,
  imgUrl,
  dateInit,
  dateEnd,
  sumarryPoints,
}: IExperienceCard) {
  return (
    <article
      className="flex flex-row rounded-xl items-center space-y-2 flex-shrink-0 p-5 min-w-[350px] min-h-[200px]
      transition-opacity duration-200 overflow-hidden text-center space-x-4"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-16 h-16 rounded-full  object-cover object-center"
        src={imgUrl}
        alt="card image"
      />

      <div className="space-y-2">
        <h4 className="text-2xl font-bold ">{title}</h4>
        <p className=" text-xl ">{company}</p>
        <p className="uppercase  text-gray-300">
          {dateInit} - {dateEnd}
        </p>
        {/* <ul className=" text-left list-disc space-y-2 ml-5 text-lg pt-5">
          {sumarryPoints?.map((point, i) => {
            return <li key={i}>{point}</li>;
          })}
        </ul> */}
      </div>
    </article>
  );
}

export default ExperienceCard;
