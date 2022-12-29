import "../styles/globals.css";
import { Nunito_Sans } from "@next/font/google";
import type { AppProps } from "next/app";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  display: "auto",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={nunito.className}>
      <Component {...pageProps} />
    </main>
  );
}
