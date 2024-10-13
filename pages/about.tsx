import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
    className="min-h-screen mx-auto  gap-8 md:gap-32 justify-center md:justify-between w-full text-gray-600 flex flex-col-reverse md:flex-row items-center"
  >
    <motion.div
      className="flex flex-col gap-6 max-w-lg text-start"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.p
        className="text-5xl md:text-7xl mx-auto tracking-tight text-gray-900 font-extrabold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Bridging gap between people and design.
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
        className="flex items-center space-x-6"
      >
        <motion.a
          href="https://github.com/pefelippe"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-600 hover:text-indigo-500 transition-colors duration-300"
        >
          <FaGithub className="w-8 h-8 sm:w-9 sm:h-9" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/pedro-felippe/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-600 hover:text-indigo-500 transition-colors duration-300"
        >
          <FaLinkedin className="w-8 h-8 sm:w-9 sm:h-9" />
        </motion.a>
      </motion.div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-full max-w-lg"
    >
      <motion.img
        src="/assets/pedrof.jpg"
        alt="Pedro Felippe"
        className="rounded-md md:rounded-[10vh] md:hover:rounded-[2vh] transition-all shadow-lg duration-300 
        w-full h-[300px] sm:h-[450px] md:h-[550px] object-cover"
      />
    </motion.div>
  </motion.div>
);

export default About;
