import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pedro Felippe - Web Developer</title>
        <meta name="description" content="Portfolio" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
