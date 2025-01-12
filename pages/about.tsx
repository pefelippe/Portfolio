import { motion } from "framer-motion";

const About = () => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.1,
        },
      },
    }}
    className="min-h-screen px-4 py-8 md:py-0 mx-auto gap-8 md:gap-16 lg:gap-24 
    justify-center w-full text-gray-600 flex flex-col md:flex-row items-center"
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-full max-w-md lg:max-w-lg"
    >
      <motion.img
        src="/assets/pedrof.jpg"
        alt="Pedro Felippe"
        className="rounded-2xl md:rounded-[8vh] md:hover:rounded-[2vh] transition-all 
        shadow-lg duration-300 w-full h-[280px] sm:h-[400px] md:h-[500px] 
        object-cover object-center"
      />
    </motion.div>

    <motion.div
      className="flex flex-col gap-6 w-full max-w-md lg:max-w-lg text-start px-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.p
        className="text-5xl md:text-7xl tracking-tight text-gray-900 font-extrabold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Pedro Felippe<span className="text-indigo-500 animate-pulse">.</span>
      </motion.p>
      <motion.p
        className="text-xl md:text-2xl mx-auto text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Brazil-based software developer with a proven track record of helping
        Brazilian companies and U.S. tech startups.{" "}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex items-center gap-4 sm:gap-6"
      >
        <motion.a
          href="#portfolio"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 py-3 px-6 rounded-lg bg-indigo-500 text-white font-medium
          text-center transition-all duration-300 hover:bg-indigo-600 shadow-md
          hover:shadow-lg text-sm sm:text-base"
        >
          View Portfolio
        </motion.a>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 py-3 px-6 rounded-lg border-2 border-indigo-500 text-indigo-500
          font-medium text-center transition-all duration-300 hover:bg-indigo-50
          text-sm sm:text-base"
        >
          Contact Me
        </motion.a>
      </motion.div>
    </motion.div>
  </motion.div>
);

export default About;
