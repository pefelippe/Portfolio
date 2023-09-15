import { Analytics } from "@vercel/analytics/react";

import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import Footer from "../src/components/layout/Footer";
import Header from "../src/components/layout/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`
    overflow-x-hidden overflow-y-scroll h-screen min-h-fit min-w-[400px] mx-auto scroll-smooth w-full
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-blue scrollbar-track-[#929af6] 
     font-sans text-white bg-[#fffff] pt-[20vh]`}
    >
      <Head>
        <title>Pedro Felippe | Work in progress</title>
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
