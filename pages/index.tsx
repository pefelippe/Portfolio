import { motion } from "framer-motion";

import BlogSection from "../src/sections/BlogSection";
import HeroSection from "../src/sections/HeroSection";
import AboutSection from "./about";

export default function Home() {
  return (
    <motion.div className="flex flex-col w-full h-full ">
      <section className="flex min-h-screen bg-[#fefefe]">
        <HeroSection />
      </section>
      {/* <section className="flex min-h-screen bg-lime-300 ">
        <BlogSection />
      </section>
      <section className="flex min-h-screen bg-[#fefefe]">
        <AboutSection />
      </section> */}
    </motion.div>
  );
}
