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
    <motion.div className="min-w-[400px] mx-auto h-fit overflow-hidden scroll-smooth text-[#fff] font-poppins bg-[#101010]  ">
      <Head>
        <title>Pedro Felippe</title>
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
        <Header />
        <Component {...pageProps} />
        <Toaster />
        <Footer />
      </ThemeProvider>
    </motion.div>
  );
}
