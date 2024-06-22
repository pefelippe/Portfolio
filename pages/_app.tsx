import { Analytics } from "@vercel/analytics/react";
import { motion } from "framer-motion";

import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import Footer from "../src/components/layout/Footer";
import Header from "../src/components/layout/Header";
import { ThemeProvider } from "../src/components/theme-provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <motion.div className="min-w-[400px] h-full overflow-hidden scroll-smooth font-poppins min-h-screen  bg-[#101010] text-[#fefefe]">
      <Head>
        <title>Pedro Felippe | Web Developer</title>
        <meta name="description" content="Portfolio" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Analytics />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="flex flex-col w-full h-full mx-auto">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </ThemeProvider>
    </motion.div>
  );
}
