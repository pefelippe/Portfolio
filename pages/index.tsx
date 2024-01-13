import { motion } from "framer-motion";

import About from "../src/content/About";
import ContactContent from "../src/content/ContactContent";
import Hero from "../src/content/Hero";
import ProjectContent from "../src/content/ProjectContent";
import AnimatedBtn from "../src/components/animated/AnimatedBtn";
import { LinkedinIcon } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <motion.div className="mt-16 flex flex-col relative">
      <motion.div
        className="fixed flex flex-col left-0 top-[40vh] justify-center bg-blue h-fit p-3 py-6 rounded-r-md
            items-center w-fit space-y-8 max-w-sm text-white z-40 max-xl:hidden"
      >
        <AnimatedBtn
          target="_blank"
          href="https://www.linkedin.com/in/pedro-felippe/"
        >
          <LinkedinIcon className="h-9 w-9 " />
        </AnimatedBtn>

        <AnimatedBtn href="https://github.com/pefelippe">
          <GitHubLogoIcon className="h-9 w-9 " />
        </AnimatedBtn>
      </motion.div>
      <section className="section">
        <About />
      </section>
      <section className="section bg-gray-300/10 border-y ">
        <ProjectContent />
      </section>
      <section className="section ">
        <ContactContent />
      </section>
    </motion.div>
  );
}
