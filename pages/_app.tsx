import { Analytics } from "@vercel/analytics/react";

import "../styles/globals.css";
import { Kodchasan } from "@next/font/google";
import type { AppProps } from "next/app";

const kodchasan = Kodchasan({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700"],
  display: "auto",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={kodchasan.className}>
        <Component {...pageProps} />
      </main>
      <Analytics mode={"production"} />
    </>
  );
}
