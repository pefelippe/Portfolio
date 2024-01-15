import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react";

import AnimatedBtn from "../src/components/animated/AnimatedBtn";
import Header from "../src/components/layout/Header";
import About from "../src/content/About";
import ContactContent from "../src/content/ContactContent";
import Hero from "../src/content/Hero";
import ProjectContent from "../src/content/ProjectContent";

export default function Home() {
  return (
    <motion.div className="w-full flex max-lg:flex-col">
      <motion.div className="lg:max-w-xl w-full ">
        <section className="bg-[#101010] h-full min-h-screen  text-[#fff] lg:fixed lg:max-w-xl flex items-center">
          <About />
        </section>
      </motion.div>
      <motion.div className="w-full ">
        <div className="w-full flex flex-col py-20 lg:py-32 gap-20 lg:gap-32 relative ">
          <section className="section  ">
            <ProjectContent />
          </section>
          <section className=" section">
            <ContactContent />
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
}
