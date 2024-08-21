import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { technologies } from "../src/constants";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      className="max-w-6xl mx-auto py-16 px-4 mt-20"
    >
      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.5 }}
          className="w-full md:w-1/3"
        >
          <Image
            src="/assets/pedrof.jpg"
            alt="Pedro Felippe"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.75 }}
          className="w-full md:w-2/3"
        >
          <h1 className="text-4xl font-bold mb-4 text-white">About Me</h1>
          <p className="text-lg mb-4 text-gray-300">
            I'm Pedro Felippe, a Web & Mobile Developer from Fortaleza, Ceará,
            Brazil. Since 2020, I've been developing real solutions that impact
            thousands of people.
          </p>
          <p className="text-lg mb-4 text-gray-300">
            I have experience working within international teams in startups and
            consultancies. My expertise lies in full-stack development in the
            Javascript ecosystem (React, Node, React Native), Ruby on Rails, and
            automation with Java (Selenium) and Python.
          </p>
          <p className="text-lg mb-6 text-gray-300">
            I enjoy working on challenging projects that push the boundaries of
            web technologies.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-white">Experience</h2>
          <ul className="list-disc list-inside mb-6 text-gray-300">
            <li className="mb-2">
              <strong>Full Stack Developer</strong> - Savant Labs • California,
              United States (Aug 2024 - Present)
            </li>
            <li className="mb-2">
              <strong>Full Stack Developer</strong> - Fetchly Labs • Texas,
              United States (Feb 2024 - Present)
            </li>
            <li className="mb-2">
              <strong>Full Stack Developer</strong> - Sankhya Gestão de Negócios
              • Uberlândia, MG, Brazil (Feb 2024 - Jul 2024)
            </li>
            <li className="mb-2">
              <strong>Frontend Developer</strong> - Atlântico • Fortaleza, CE,
              Brazil (Dec 2020 - Feb 2024)
            </li>
            <li className="mb-2">
              <strong>QA Analyst</strong> - GREat • Fortaleza, CE, Brazil (Jan
              2020 - Dec 2020)
            </li>
          </ul>

          {/* <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            {technologies.map((tech) => (
              <div key={tech.name} className="flex items-center">
                <Image
                  src={tech.imgUrl}
                  alt={tech.name}
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span>{tech.name}</span>
              </div>
            ))}
          </div> */}

          <h2 className="text-2xl font-bold mb-4 text-white">Education</h2>
          <p className="mb-6 text-gray-300">
            <strong>Bachelor's Degree in Computer Science</strong>
            <br />
            Federal University of Ceará (Dec 2018 - Dec 2021)
          </p>

          <h2 className="text-2xl font-bold mb-4 text-white">Certifications</h2>
          <ul className="list-disc list-inside mb-6 text-gray-300">
            <li>EFSET English Certificate (C2 Proficient)</li>
            <li>Scrum Foundation Professional Certificate - SFPC™</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-white">Patents</h2>
          <ul className="list-disc list-inside mb-6 text-gray-300">
            <li>Agent-based certificate management</li>
            <li>Blockchain-based certificate lifecycle management</li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}