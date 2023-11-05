/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Link from "next/link";

function AboutContent() {
  return (
    <motion.div className="flex  w-full   mx-auto  gap-6 lg:gap-12  flex-col text-start max-w-5xl max-xl:px-6 ">
      <div className="flex gap-6 lg:gap-12 items-center relative max-lg:max-w-xl max-lg:mx-auto max-lg:flex-col ">
        <motion.img
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.1 },
          }}
          src="/assets/pedrof.jpg"
          alt="me"
          className="max-lg:max-h-[250px]  w-full lg:max-w-[450px] h-[550px] object-cover rounded-xl"
        />

        <div className="relative text-[#B3AFC0]  font-light text-xl  gap-10 flex flex-col  h-full ">
          <h1 className="text-3xl lg:text-4xl font-normal  text-white ">
            About me
          </h1>
          <p>
            I've been developing digital products since 2018, including web
            applications, PWAs, websites, e-commerce solutions, and mobile apps
            that assist organizations in refining their online presence and
            fostering growth.
          </p>
          <p className="mb-auto">
            My area of expertise is <span className="">Web Development</span>.
            With a strong emphasis on key areas like{" "}
            <span className="">
              user experience (UX), performance, accessibility, security,
              (CI/CD), databases and API integrations
            </span>
            .
          </p>

          <Link href="/about">
            <motion.p
              whileHover={{
                scale: 1.01,
                transition: { duration: 0.1 },
              }}
              className=" border rounded-full p-5 px-12 text-xl font-medium  text-center w-fit max-lg:w-full 
               hover:text-blue transition-all "
            >
              Know more about me
            </motion.p>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutContent;
