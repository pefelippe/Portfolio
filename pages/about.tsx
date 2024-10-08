import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const ProfileImage = () => (
  <motion.img
    variants={fadeInVariants}
    initial="hidden"
    animate="visible"
    transition={{ duration: 0.6, delay: 0.2 }}
    src="/assets/pedrof.jpg"
    alt="Pedro Felippe"
    className="rounded-md shadow-lg transition-transform duration-300 w-full max-h-[350px] object-cover"
  />
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
    initial="hidden"
    animate="visible"
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.1,
        },
      },
    }}
    className="max-w-3xl mx-auto  max-md:px-4 pt-2 w-full"
  >
    <div className="flex flex-col items-start gap-8 max-w-3xl mx-auto ">
      <motion.h1
        variants={fadeInVariants}
        className="text-4xl md:text-5xl font-extrabold tracking-tighter mx-auto text-indigo-600 py-5"
      >
        About Me
      </motion.h1>
      <ProfileImage />
      <motion.div
        variants={fadeInVariants}
        transition={{ duration: 0.6 }}
        className="w-full lg:max-w-3xl mb-6 md:mb-10 text-xs md:text-xl "
      >
        <motion.p
          variants={fadeInVariants}
          className="mb-4 text-sm sm:text-md md:text-xl text-start"
        >
          I'm Pedro Felippe, a Web & Mobile Developer from Fortaleza, Ceará,
          Brazil. Since 2020, I've been developing real solutions that impact
          thousands of people.
        </motion.p>
        <motion.p
          variants={fadeInVariants}
          className="mb-4 text-sm sm:text-md md:text-xl text-start"
        >
          I have experience working within international teams in startups and
          consultancies. My expertise lies in full-stack development in the
          Javascript ecosystem (React, Node, React Native), Ruby on Rails, and
          automation with Java (Selenium) and Python.
        </motion.p>
        <motion.p
          variants={fadeInVariants}
          className="mb-6 md:mb-10 text-sm sm:text-md md:text-xl text-start"
        >
          I enjoy working on challenging projects that push the boundaries of
          web technologies.
        </motion.p>

        <motion.div variants={fadeInVariants}>
          <Section title="Experience">
            <ul className="list-disc list-inside mb-6 md:mb-10 text-sm sm:text-md md:text-xl text-start">
              <li className="mb-1">
                <strong>Full Stack Developer</strong> - Savant Labs •
                California, United States (Aug 2024 - Present)
              </li>
              <li className="mb-1">
                <strong>Full Stack Developer</strong> - Fetchly Labs • Texas,
                United States (Feb 2024 - Present)
              </li>
              <li className="mb-1">
                <strong>Full Stack Developer</strong> - Sankhya Gestão de
                Negócios • Uberlândia, MG, Brazil (Feb 2024 - Jul 2024)
              </li>
              <li className="mb-1">
                <strong>Frontend Developer</strong> - Atlântico • Fortaleza, CE,
                Brazil (Dec 2020 - Feb 2024)
              </li>
              <li className="mb-1">
                <strong>QA Analyst</strong> - GREat • Fortaleza, CE, Brazil (Jan
                2020 - Dec 2020)
              </li>
            </ul>
          </Section>
        </motion.div>

        <motion.div variants={fadeInVariants}>
          <Section title="Education">
            <p className="mb-6 md:mb-10 text-xs md:text-xl text-start">
              <strong>Bachelor's Degree in Computer Science</strong>
              <br />
              Federal University of Ceará (Dec 2018 - Dec 2021)
            </p>
          </Section>
        </motion.div>

        <motion.div variants={fadeInVariants}>
          <Section title="Certifications">
            <ul className="list-disc list-inside mb-6 md:mb-10 text-xs md:text-xl text-start">
              <li>EFSET English Certificate (C2 Proficient)</li>
              <li>Scrum Foundation Professional Certificate - SFPC™</li>
            </ul>
          </Section>
        </motion.div>

        <motion.div variants={fadeInVariants}>
          <Section title="Patents">
            <ul className="list-disc list-inside mb-6 md:mb-10 text-xs md:text-xl text-start">
              <li>Agent-based certificate management</li>
              <li>Blockchain-based certificate lifecycle management</li>
            </ul>
          </Section>
        </motion.div>
      </motion.div>
    </div>
  </motion.div>
);

export default About;
