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
      <motion.div className="max-w-xl w-full max-lg:hidden ">
        <SideCard />
      </motion.div>
      <motion.div className="w-full flex flex-col py-20 lg:py-32 gap-20 lg:gap-32 relative">
        <section className="section">
          <About />
        </section>
        <section className="section">
          <ProjectContent />
        </section>
        <section className=" section">
          <ContactContent />
        </section>
      </motion.div>
    </motion.div>
  );
}
