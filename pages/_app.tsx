import { Analytics } from "@vercel/analytics/react";

import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";

import Footer from "../src/components/layout/Footer";
import Header from "../src/components/layout/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className="
        overflow-x-hidden overflow-y-scroll bg-gray-50
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#5865f2]/80  text-[#1f2937] bg-[#fefefe]/90
        h-screen min-w-[400px] font-poppins min-h-fit "
    >
      <Head>
        <title>Pedro Felippe</title>
        <meta name="description" content="Portfolio" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>

      <Analytics />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
