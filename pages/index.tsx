import { motion } from "framer-motion";

import BlogSection from "../src/sections/BlogSection";
import HeroSection from "../src/sections/HeroSection";
import AboutSection from "./about";

export default function Home() {
  return (
    <motion.div className="flex flex-col w-full h-full my-20 divider-x">
      <section className="flex py-20 md:py-32">
        <HeroSection />
      </section>
      <section className="flex ">
        <AboutSection />
      </section>
      {/* <section className="flex min-h-screen bg-[#62cf87] ">
        <BlogSection />
      </section> */}
    </motion.div>
  );
}
