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
      className=" snap-y snap-mandatory
        overflow-x-hidden overflow-y-scroll bg-[url('/assets/endless-constellation.svg')]
        
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#5865f2]/80 scroll-smooth 
        h-screen min-w-[350px]  min-h-screen  text-[#000] "
    >
      <Head>
        <title>Pedro Felippe | Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>

      <Analytics />

      {/* <div className="snap-center ">
        <Header />
      </div> */}

      <Component {...pageProps} />

      <div className="snap-center ">
        <Footer />
      </div>
    </div>
  );
}
