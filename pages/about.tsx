import React from "react";
import { motion } from "framer-motion";
function about() {
  return (
    <div className="section w-full min-h-screen max-w-5xl mx-auto flex flex-col justify-start items-center  py-20 gap-10">
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        className="text-7xl font-bold "
      >
        About
      </motion.p>

      <motion.img
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.25 }}
        className="max-h-[600px] object-cover w-full rounded"
        src="/assets/pedrof.jpg"
      />

      <div className="w-full flex flex-col gap-6 max-w-xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.5 }}
          className=" font-bold text-4xl"
        >
          Pedro Felippe
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.75 }}
          className="max-w-xl leading-relaxed"
        >
          I’m a senior studying Interaction Design at the University of
          Washington, Seattle. Most recently, I was a Product Design Intern at
          Facebook where I was focused on designing for real-time video
          conversations on Messenger. <br />
          <br />I have been to has left me inspired and curious to learn more
          about design. The thrill of working on an idea and seeing it turn into
          something real is one of the most incredible experiences I have ever
          had. The feeling of seeing something I envisioned appear on screen
          still seems magical, just as it did during the years I drew houses and
          flowers with MS-Paint. And the will to keep experiencing that magic is
          why I continue to practice design every day. <br />
          <br />I believe that the projects I have worked on have been the
          highlight of my design journey. I have been influenced to constantly
          look for problems around me and solutions to them; for challenges like
          these are what drive me to work relentlessly through sleepless nights
          for hours on end. And I love every moment of them.
          <br />
          <br /> The dedication, eye for detail, and perseverance that designing
          has taught me, are accelerators in enabling me to achieve my goal of
          giving back to society and leaving my design footprint behind in this
          world.
          <br />
        </motion.p>
      </div>
    </div>
  );
}

export default about;
