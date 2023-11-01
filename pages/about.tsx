import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className=" flex max-md:flex-col min-h-screen w-screen max-w-5xl mx-auto"
    >
      <motion.img></motion.img>
      <p>yarn add react-particles</p>
    </motion.div>
  );
}
