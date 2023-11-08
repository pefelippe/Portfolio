import { motion } from "framer-motion";

import Skills from "../src/components/Skills";

export default function Home() {
  return (
    <motion.div
      className="flex flex-col justify-start gap-12 w-full mx-auto h-fit max-w-5xl
     my-[10vh] min-h-[90vh] items-center lg:items-start py-8 max-lg:px-6"
    >
      <div className="flex gap-6 lg:gap-12 items-center relative max-lg:max-w-xl max-lg:mx-auto max-lg:flex-col ">
        <motion.img
          initial={{ opacity: 0, x: -75 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.1 },
          }}
          src="/assets/pedrof.jpg"
          alt="me"
          className="max-lg:max-h-[220px]  w-full lg:max-w-[450px] h-[650px] object-cover rounded-xl"
        />

        <motion.div
          initial={{ opacity: 0, y: -75 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="relative text-gray-100  font-light text-xl  gap-6 flex flex-col  h-full "
        >
          <h1 className="font-medium   text-white text-3xl">About me</h1>
          <p> My name is Pedro Felippe. A Web Developer from Brazil. </p>
          <p>
            I have been developing digital products since 2018, including web
            applications, PWAs, websites, e-commerce solutions, and mobile apps
            that assist organizations in refining their online presence and
            fostering growth.
          </p>
          <p className="mb-auto">
            With a strong emphasis on key areas like{" "}
            <span className="">
              user experience (UX), performance, accessibility, security,
              (CI/CD), databases and API integrations
            </span>
            .
          </p>

          <Skills />
        </motion.div>
      </div>
      <h2 className="font-medium text-2xl text-white">Work Experience</h2>
      <div className="text-white flex justify-start gap-10 items-center">
        <div className="flex flex-col gap-3 items-start bg-[#181818]  rounded-xl p-8">
          <h3 className="font-medium text-xl">Front-end Developer</h3>
          <span className="text-gray-300 font-medium">Instituto Atlântico</span>
          {/* <span className="flex max-w-md text-[#f5f5f5]   font-light">
            I develop and maintain web applications using React.js with
            Typescript, Redux, and Golang. <br />
            <br />
            - Implementing reusable, testable, and high-quality features and
            interfaces.
            <br />
            - Making technical decisions regarding the product, such as adopting
            design patterns like Clean Code, MVVC, and DDD. <br />
            - Participating in English-language meetings with international
            colleagues for effective collaboration. <br />
            - Actively collaborating with UX teams to suggest and implement user
            experience improvements.
            <br />
          </span> */}
        </div>

        <div className="flex flex-col items-start gap-3 bg-[#181818] rounded-xl p-8 px-12">
          <h3 className="font-medium text-xl">Software QA Tester</h3>
          <span className="text-gray-300 font-light">GREat</span>
          {/* <span className="flex max-w-md  text-[#f5f5f5]  font-light">
            I develop and maintain web applications using React.js with
            Typescript, Redux, and Golang. <br />
            <br />
            - Implementing reusable, testable, and high-quality features and
            interfaces.
            <br />
            - Making technical decisions regarding the product, such as adopting
            design patterns like Clean Code, MVVC, and DDD. <br />
            - Participating in English-language meetings with international
            colleagues for effective collaboration. <br />
            - Actively collaborating with UX teams to suggest and implement user
            experience improvements.
            <br />
          </span> */}
        </div>
      </div>
    </motion.div>
  );
}
