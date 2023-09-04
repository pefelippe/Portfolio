import { Analytics } from "@vercel/analytics/react";

import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import Footer from "../src/components/layout/Footer";
import Header from "../src/components/layout/Header";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`
    overflow-x-hidden overflow-y-scroll min-w-3xl h-screen min-h-[300px] mx-auto
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#5865f2]/80 
     font-sans text-gray-900
     snap-mandatory snap-y 
  `}
    >
      <Head>
        <title>Pedro Felippe</title>
        <meta name="description" content="Portfolio" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>

      <Analytics />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-screen"
      >
        <Header />
        <div className="max-md:hidden absolute flex-col left-4 bottom-4  flex gap-8 mx-auto justify-center">
          <Link
            className="hover:text-blue"
            target="_blank"
            href="github.com/pefelippe"
          >
            <FaGithub className="h-10 w-10 hover:text-blue" />
          </Link>
          <Link
            className="hover:text-blue"
            target="_blank"
            href="https://www.linkedin.com/in/pedro-felippe/"
          >
            <FaLinkedin className="h-10 w-10 hover:text-blue" />
          </Link>
          <Link
            className="hover:text-blue"
            target="_blank"
            href="https://docs.google.com/document/d/1xl45doLPK-BEZ-yLpfr7KnODSTqEJWweH2MzCqTf1S0/edit"
          >
            <FaFilePdf className="h-10 w-10 hover:text-blue" />
          </Link>
        </div>
        <Component {...pageProps} />
        <Footer />
      </motion.div>
    </div>
  );
}
