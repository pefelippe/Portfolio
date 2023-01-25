import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className=" z-0 
    overflow-x-hidden overflow-y-scroll 
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scroll-smooth  min-h-screen text-[#fff]   bg-[#191919] bg-[url('/assets/endless-constellation.svg')] "
    >
      {/* /* background by SVGBackgrounds.com */}
      <Head>
        <title>Pedro Felippe</title>
        <meta name="description" content="Portfolio" />
      </Head>

      <Header />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </div>
  );
}
