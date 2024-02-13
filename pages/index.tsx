import Head from "next/head";

// Components
import {
  FooterCon,
  FooterLink,
  GradientBgCom,
} from "@/components/QuoteGenerator/QuoteGeneratorElement";
import { useState } from "react";

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<number | null>(0);

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
        <FooterCon>
          <>
            Quotes Generated: {numberOfQuotes}
            <br />
            Developed by{" "}
            <FooterLink
              href="https://github.com/RiyaBhandari-2811"
              target="_blank"
              rel="noopener noreferrer"
            >
              @Riya
            </FooterLink>
          </>
        </FooterCon>
      </GradientBgCom>
    </>
  );
}
