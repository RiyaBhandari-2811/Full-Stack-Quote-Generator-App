import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { GradientBgCom } from "@/components/QuoteGenerator/QuoteGeneratorElement";

export default function Home() {
  return (
    <>
      <Head>
        <title>Quote Generator</title>
        <meta name="description" content="Full-Stack Quote Generator App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Background */}
      <GradientBgCom>
        
      </GradientBgCom>
    </>
  );
}
