import { motion } from "framer-motion";

const ProfileImage = () => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.75, delay: 0.5, type: "spring", stiffness: 100 }}
    className="flex justify-center lg:justify-start mb-6 lg:mb-0"
  >
    <motion.img
      src="/assets/pedrof.jpg"
      alt="Pedro Felippe"
      className="rounded-full md:rounded-3xl shadow-lg transition-transform duration-300 w-32 h-32 md:w-auto md:h-auto"
      whileHover={{ scale: 1.1 }}
    />
  </motion.div>
);

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mb-6">
    <h2 className="text-xl sm:text-3xl font-bold mb-6 text-indigo-600">
      {title}
    </h2>
    {children}
  </div>
);

const About = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 my-[15vh] w-full"
  >
    <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-between gap-12 xl:gap-32">
      <ProfileImage />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, type: "spring", stiffness: 100 }}
        className="w-full lg:max-w-3xl mb-6 md:mb-10 text-xs md:text-lg"
      >
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 md:mb-10 text-indigo-600">
          About Me
        </h1>
        <p className="mb-4 text-sm sm:text-md md:text-lg">
          I'm Pedro Felippe, a Web & Mobile Developer from Fortaleza, Ceará,
          Brazil. Since 2020, I've been developing real solutions that impact
          thousands of people.
        </p>
        <p className="mb-4 text-sm sm:text-md md:text-lg">
          I have experience working within international teams in startups and
          consultancies. My expertise lies in full-stack development in the
          Javascript ecosystem (React, Node, React Native), Ruby on Rails, and
          automation with Java (Selenium) and Python.
        </p>
        <p className="mb-6 md:mb-10 text-sm sm:text-md md:text-lg">
          I enjoy working on challenging projects that push the boundaries of
          web technologies.
        </p>

        <Section title="Experience">
          <ul className="list-disc list-inside mb-6 md:mb-10 text-sm sm:text-md md:text-lg">
            <motion.li className="mb-1" whileHover={{ scale: 1.05 }}>
              <strong>Full Stack Developer</strong> - Savant Labs • California,
              United States (Aug 2024 - Present)
            </motion.li>
            <motion.li className="mb-1" whileHover={{ scale: 1.05 }}>
              <strong>Full Stack Developer</strong> - Fetchly Labs • Texas,
              United States (Feb 2024 - Present)
            </motion.li>
            <motion.li className="mb-1" whileHover={{ scale: 1.05 }}>
              <strong>Full Stack Developer</strong> - Sankhya Gestão de Negócios
              • Uberlândia, MG, Brazil (Feb 2024 - Jul 2024)
            </motion.li>
            <motion.li className="mb-1" whileHover={{ scale: 1.05 }}>
              <strong>Frontend Developer</strong> - Atlântico • Fortaleza, CE,
              Brazil (Dec 2020 - Feb 2024)
            </motion.li>
            <motion.li className="mb-1" whileHover={{ scale: 1.05 }}>
              <strong>QA Analyst</strong> - GREat • Fortaleza, CE, Brazil (Jan
              2020 - Dec 2020)
            </motion.li>
          </ul>
        </Section>

        <Section title="Education">
          <p className="mb-6 md:mb-10 text-xs md:text-lg">
            <strong>Bachelor's Degree in Computer Science</strong>
            <br />
            Federal University of Ceará (Dec 2018 - Dec 2021)
          </p>
        </Section>

        <Section title="Certifications">
          <ul className="list-disc list-inside mb-6 md:mb-10 text-xs md:text-lg">
            <motion.li whileHover={{ scale: 1.05 }}>EFSET English Certificate (C2 Proficient)</motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>Scrum Foundation Professional Certificate - SFPC™</motion.li>
          </ul>
        </Section>

        <Section title="Patents">
          <ul className="list-disc list-inside mb-6 md:mb-10 text-xs md:text-lg">
            <motion.li whileHover={{ scale: 1.05 }}>Agent-based certificate management</motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>Blockchain-based certificate lifecycle management</motion.li>
          </ul>
        </Section>
      </motion.div>
    </div>
  </motion.div>
);

export default About;