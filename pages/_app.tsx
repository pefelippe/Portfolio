import { Analytics } from "@vercel/analytics/react";

import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import Footer from "../src/components/layout/Footer";
import Header from "../src/components/layout/Header";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  function handleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div
      className={`
    overflow-x-hidden overflow-y-scroll 
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#5865f2]/80 text-[#FAFAFA] 
    h-screen font-sans relative  bg-[#000]
    min-h-screen min-w-full  max-xl:px-8
  `}
    >
      <Head>
        <title>Pedro Felippe — Web Developer</title>
        <meta name="description" content="Portfolio" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>

      <Analytics />
      <div className="w-full">
        <Header isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} />
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
