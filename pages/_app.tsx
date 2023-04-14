{
  /* /* background by SVGBackgrounds.com */
}
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

import type { AppProps } from "next/app";
import Head from "next/head";

import Footer from "../src/components/layout/Footer";
import Header from "../src/components/layout/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className="
        overflow-x-hidden overflow-y-scroll 
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#5865f2]/80 scroll-smooth 
        h-screen min-w-[400px]    font-roboto min-h-fit  bg-[#141414]"
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
