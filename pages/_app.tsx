import { Analytics } from "@vercel/analytics/react";
import { motion } from "framer-motion";

import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import Footer from "../src/components/layout/Footer";
import Header from "../src/components/layout/Header";
import { ThemeProvider } from "../src/components/theme-provider";
import { Toaster } from "../src/components/ui/toaster";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <motion.div
        className={`
        overflow-x-hidden overflow-y-scroll  min-w-[400px] mx-auto min-h-fit
        scroll-smooth w-full font-antialiased flex flex-col font-poppins color-[#212127]
        scrollbar  scrollbar-thumb-blue  scrollbar-track-[#929af6]
         overflow-hidden`}
      >
        <Head>
          <title>Pedro Felippe | Web Developer </title>
          <meta name="description" content="Portfolio" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
        </Head>
        <Analytics />
        <Header />
        <Component {...pageProps} />
        <Toaster />
        <Footer />
      </motion.div>
    </ThemeProvider>
  );
}
