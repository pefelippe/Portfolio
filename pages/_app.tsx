import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/atoms/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className="bg-[rgb(22,22,22)] text-white h-screen snap-y snap-mandatory z-0 
    overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scroll-smooth "
    >
      <Header />
      <Head>
        <title>Pedro Felippe | Web Developer</title>
        <meta name="description" content="Portfolio" />
      </Head>
      <Component {...pageProps} />

      <Footer />
    </div>
  );
}
