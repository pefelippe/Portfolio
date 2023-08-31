import { Analytics } from "@vercel/analytics/react";

import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import Footer from "../src/components/layout/Footer";
import Header from "../src/components/layout/Header";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`
    overflow-x-hidden overflow-y-scroll min-w-full h-screen min-h-[300px]
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#5865f2]/80 text-[#FAFAFA] 
     font-sans   bg-gray-900
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
        <Component {...pageProps} />
        <Footer />
      </motion.div>
    </div>
  );
}
