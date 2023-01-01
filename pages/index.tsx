import Head from "next/head";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Stopwatch } from "@/components/Stopwatch";

export default function Page() {
  const { init, sessions, status, setSessions } = useLocalStorage();

  if (!init) return null;

  return (
    <>
      <Head>
        <title>count the hours</title>
        <meta name="description" content="by @justhonnoldwegoinghome" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/clock.ico" />
      </Head>
      <Stopwatch
        sessions={sessions}
        status={status}
        setSessions={setSessions}
      />
    </>
  );
}
