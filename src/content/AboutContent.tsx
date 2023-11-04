/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Link from "next/link";

function AboutContent() {
  return (
    <motion.div className="flex  w-full   mx-auto  gap-6 lg:gap-10  flex-col text-start max-w-5xl max-xl:px-6 ">
      <div className="flex gap-6 lg:gap-16 items-center relative max-lg:max-w-xl max-lg:mx-auto max-lg:flex-col ">
        <motion.img
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.1 },
          }}
          src="/assets/pedro.jpg"
          alt="me"
          className="max-lg:max-h-[250px]  w-full lg:max-w-[450px] h-[550px] object-cover rounded-xl"
        />

        <div className="relative text-[#B3AFC0]  font-light text-xl  gap-6 flex flex-col justify-between h-full ">
          <h1 className="text-4xl lg:text-5xl font-thin  text-white ">
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

          {/* <AnimatedBtn
              className="rounded-md   font-semibold   "
              target="_blank"
              href="https://github.com/pefelippe"
            >
              <div className="flex flex-col items-center justify-center rounded-md gap-2 text-xl border p-4  hover:text-blue">
                <FaGithub className="headerSocial" />
              </div>
            </AnimatedBtn>

            <AnimatedBtn
              className="rounded-md  font-semibold"
              target="_blank"
              href="https://www.linkedin.com/in/pedro-felippe/"
            >
              <div className="flex flex-col items-center justify-center   rounded-md gap-2 text-xl border p-4  hover:text-blue">
                <FaLinkedin className="headerSocial" />
              </div>
            </AnimatedBtn> */}

          <Link href="/about">
            <motion.p
              whileHover={{
                scale: 1.01,
                transition: { duration: 0.1 },
              }}
              className=" border rounded-md p-5 w-full text-xl font-medium max-lg:mx-auto text-center 
               hover:text-blue transition-all"
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
