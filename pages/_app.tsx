{
  /* /* background by SVGBackgrounds.com */
}
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className=" z-0 
    overflow-x-hidden overflow-y-scroll 
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#5865f2] /80 scroll-smooth 
     text-[#fff]  h-screen bg-[#191919] bg-[url('/assets/endless-constellation.svg')] min-w-[400px]"
    >
      <Head>
        <title>Pedro Felippe | Portfolio</title>
        <meta name="description" content="Portfolio" />
      </Head>

      <Header />

      <Component {...pageProps} />
      <Analytics />
      <div className="snap-center">
        <Footer />
      </div>
    </div>
  );
}
