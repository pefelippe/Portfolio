import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="flex flex-col justify-start lg:justify-center gap-12 w-full mx-auto h-fit max-w-7xl
     min-h-[90vh] items-center lg:items-start py-8 px-6"
    >
      <div className="flex gap-6 lg:gap-24 items-center relative max-lg:max-w-xl max-lg:mx-auto max-lg:flex-col ">
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
          className="max-lg:max-h-[350px]  w-full lg:max-w-[450px] shadow h-[650px] object-cover rounded-xl"
        />

        <motion.div
          initial={{ opacity: 0, y: -75 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="relative text-[#888]  font-extralight text-xl  gap-4 flex flex-col  h-full w-full items-start lg:max-w-2xl"
        >
          <h1 className="text-4xl lg:text-6xl text-[#222222] font-bold leading-[1.2]">
            About-me.
          </h1>

          <p>
            I have been developing digital products since 2018, including web
            applications, PWAs, websites, e-commerce solutions, and mobile apps
            that assist organizations in refining their online presence and
            fostering growth.
          </p>
          <p className="mb-6">
            With a strong emphasis on key areas like{" "}
            <span className="">
              user experience (UX), performance, accessibility, security,
              (CI/CD), databases and API integrations
            </span>
            .
          </p>
          {/* <Skills /> */}
        </motion.div>
      </div>
    </motion.div>
  );
}
