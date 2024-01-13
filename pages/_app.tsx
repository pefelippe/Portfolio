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
    <motion.div
      className="
        min-w-[400px] mx-auto min-h-screen   h-fit overflow-hidden font-sans scroll-smooth font-"
    >
      <Head>
        <title>Pedro Felippe - Developer </title>
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
  );
}
