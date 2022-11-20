import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>pefelippe.dev</title>
        <meta name="description" content="Pefelippe Portfolio" />
        <Link href="/dist/output.css" rel="stylesheet" />
      </Head>
    </div>
  );
}
