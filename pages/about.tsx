import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div className="flex flex-col justify-start gap-10 w-full mx-auto h-fit max-w-5xl mt-[10vh] min-h-[90vh] items-center lg:items-start py-12 max-lg:px-6">
      <h1 className="font-thin  text-gray-300 text-4xl">About me</h1>
      <div className="flex gap-6 lg:gap-16 items-center relative max-lg:max-w-xl max-lg:mx-auto max-lg:flex-col ">
        <motion.img
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.1 },
          }}
          src="/assets/pedrof.jpg"
          alt="me"
          className="max-lg:max-h-[300px]  w-full lg:max-w-[450px] h-[550px] object-cover rounded-xl"
        />

        <div className="relative text-[#B3AFC0]  font-light text-xl  gap-10 flex flex-col  h-full ">
          <p>
            Ive been developing digital products since 2018, including web
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
        </div>
      </div>
    </motion.div>
  );
}
