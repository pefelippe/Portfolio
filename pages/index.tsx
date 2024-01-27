import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react";

import AnimatedBtn from "../src/components/animated/AnimatedBtn";
import Header from "../src/components/layout/Header";
import SideCard from "../src/components/SideCard";
import About from "../src/content/About";
import ContactContent from "../src/content/ContactContent";
import Hero from "../src/content/Hero";
import ProjectContent from "../src/content/ProjectContent";

export default function Home() {
  return (
    <motion.div className="w-full flex max-lg:flex-col">
      <motion.div className="w-full flex flex-col  relative">
        <section className="section ">
          <Hero />
        </section>
        <section className="section bg-gray-300/10 border-y">
          <About />
        </section>
        <section className="section">
          <ProjectContent />
        </section>
        <section className=" section bg-gray-300/10 border-y">
          <ContactContent />
        </section>
      </motion.div>
    </motion.div>
  );
}
