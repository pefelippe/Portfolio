import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className=" h-screen z-0 
    overflow-x-hidden overflow-y-scroll  snap-y snap-mandatory
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scroll-smooth  "
    >
      <Head>
        <title>Pedro Felippe</title>
        <meta name="description" content="Portfolio" />
      </Head>

      <Component {...pageProps} />
    </div>
  );
}
