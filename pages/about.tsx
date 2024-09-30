import { motion } from "framer-motion";

const ProfileImage = () => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.75, delay: 0.5 }}
    className=" justify-center md:justify-start hidden lg:flex"
  >
    <motion.img
      src="/assets/pedrof.jpg"
      alt="Pedro Felippe"
      className="rounded-full md:rounded-3xl shadow-lg transition-transform duration-300 
      w-32 h-32 md:w-auto md:h-auto"
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
  <motion.div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 my-[15vh] w-full">
    <div className="flex flex-col md:flex-row items-start justify-between gap-12 xl:gap-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
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
            <li className="mb-1">
              <strong>Full Stack Developer</strong> - Savant Labs • California,
              United States (Aug 2024 - Present)
            </li>
            <li className="mb-1">
              <strong>Full Stack Developer</strong> - Fetchly Labs • Texas,
              United States (Feb 2024 - Present)
            </li>
            <li className="mb-1">
              <strong>Full Stack Developer</strong> - Sankhya Gestão de Negócios
              • Uberlândia, MG, Brazil (Feb 2024 - Jul 2024)
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

        {/* <Section title="Skills">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {technologies.map((tech) => (
              <div key={tech.name} className="flex items-center">
                <Image
                  src={tech.imgUrl}
                  alt={tech.name}
                  width={32}
                  height={32}
                  className="mr-2"
                />
                <span className="text-black font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </Section> */}

        <Section title="Education">
          <p className="mb-6 md:mb-10 text-xs md:text-lg">
            <strong>Bachelor's Degree in Computer Science</strong>
            <br />
            Federal University of Ceará (Dec 2018 - Dec 2021)
          </p>
        </Section>

        <Section title="Certifications">
          <ul className="list-disc list-inside mb-6 md:mb-10 text-xs md:text-lg">
            <li>EFSET English Certificate (C2 Proficient)</li>
            <li>Scrum Foundation Professional Certificate - SFPC™</li>
          </ul>
        </Section>

        <Section title="Patents">
          <ul className="list-disc list-inside mb-6 md:mb-10 text-xs md:text-lg">
            <li>Agent-based certificate management</li>
            <li>Blockchain-based certificate lifecycle management</li>
          </ul>
        </Section>
      </motion.div>
      <ProfileImage />
    </div>
  </motion.div>
);

export default About;
