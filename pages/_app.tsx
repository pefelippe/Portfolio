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
import AnimatedBtn from "../src/components/animated/AnimatedBtn";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`
    overflow-x-hidden overflow-y-scroll h-screen min-h-fit min-w-[400px] mx-auto scroll-smooth
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-blue
     font-sans text-white from-[#000500] to-[#0D160B] bg-gradient-to-b
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
        transition={{ duration: 1.5 }}
        className="w-full h-screen"
      >
        {/* <Header /> */}
        <Component {...pageProps} />
        {/* <Footer /> */}
      </motion.div>
    </div>
  );
}
