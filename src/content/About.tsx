/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { Skills } from "../components/Skills";

export default function About() {
  const skillList = ["react", "tailwind", "shadcn", "next", "typescript"];
  return (
    <motion.div
      id="about-content"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="content-intern"
    >
      <div className="w-full font-normal flex flex-col justify-start text-start text-lg  h-fit ">
        <h1 className="section-title">About me</h1>
        <h3 className="section-subtitle">
          A dedicated developer based in Brazil.
        </h3>
      </div>
      <div className="flex max-lg:flex-col gap-8 lg:gap-16 max-lg:items-start items-center">
        <motion.img
          src="assets/pedrof.jpg"
          alt="pedrofelippe"
          className="flex-shrink-1 object-cover relative max-lg:hidden w-full max-w-[450px] rounded-md border-4 "
        />
        <div className="flex gap-4 flex-col w-full ">
          <p className="text-xl md:text-2xl font-light leading-tight ">
            I am a technology enthusiast who even started creating my first
            (terrible) websites in HTML and CSS as a child. My motivation has
            always been to understand how computers works. <br />
            <br />
            In the last years i have been dedicated to solving complex problems
            for companies using simple and well-executed solutions. <br />
            <br />I excel in developing user-friendly web applications, creating
            robust RESTful APIs, managing databases, and ensuring seamless
            integration with CI/CD pipelines.
          </p>
          {/* <Skills technologies={skillList} /> */}
        </div>
      </div>
    </motion.div>
  );
}
