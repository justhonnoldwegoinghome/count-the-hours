import { differenceInSeconds } from "date-fns";
import Head from "next/head";
import { storage } from "@/utils/storage";
import { format } from "@/utils/format";
import { useEffect, useState } from "react";

type Status = "started" | "paused" | "ended" | "default";

export default function Page() {
  const [status, setStatus] = useState<Status>("default");
  const [canStart, setCanStart] = useState(false);
  const [canPause, setCanPause] = useState(false);
  const [canEnd, setCanEnd] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState<number>(0);

  useEffect(() => {
    const status = storage.getItem("status");
    if (status === null) return;
    setStatus(storage.getItem("status"));
  }, []);

  useEffect(() => {
    switch (status) {
      case "default":
        setCanStart(true);
        setCanPause(false);
        setCanEnd(false);
        break;
      case "started":
        setCanStart(false);
        setCanPause(true);
        setCanEnd(true);
        break;
      case "paused":
        setCanStart(true);
        setCanPause(false);
        setCanEnd(true);
        break;
    }
  }, [status]);

  const start = () => {
    setStatus("started");

    storage.setItem("status", "started");

    const sessions = storage.getItem("sessions", true);
    if (sessions === null) {
      storage.setItem("sessions", [{ start: new Date().toISOString() }], true);
    } else {
      sessions.push({ start: new Date().toISOString() });
      storage.setItem("sessions", sessions, true);
    }
  };

  const pause = () => {
    setStatus("paused");

    storage.setItem("status", "paused");

    const sessions = storage.getItem("sessions", true);
    sessions[sessions.length - 1]["end"] = new Date().toISOString();
    storage.setItem("sessions", sessions, true);
  };

  const end = () => {
    setStatus("ended");

    storage.setItem("status", "default");
    const sessions = storage.getItem("sessions", true);
    sessions[sessions.length - 1]["end"] = new Date().toISOString(); // incase fella didn't pause before ending

    let totalSeconds = 0;

    for (const session of sessions) {
      totalSeconds += differenceInSeconds(
        new Date(session["end"]),
        new Date(session["start"])
      );
    }

    setTotalSeconds(totalSeconds);
    storage.removeItem("sessions");
  };

  return (
    <>
      <Head>
        <title>count the hours</title>
        <meta name="description" content="by @justhonnoldwegoinghome" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/clock.ico" />
      </Head>
      <div className="relative min-h-[100vh] bg-steel flex justify-center items-center gap-8">
        {status === "ended" ? (
          <div className="p-8 bg-light rounded-3xl">
            <p className="text-3xl font-semibold">{`${format.secondsToDuration(
              totalSeconds
            )}`}</p>
          </div>
        ) : (
          <>
            <button
              onClick={canStart ? start : () => null}
              className={`bg-light p-8 rounded-xl text-xl font-semibold w-[10rem] shadow-lg ${
                status === "started" && "bg-gradient-to-r from-navy to-grey"
              }
          ${!canStart && "cursor-not-allowed"}
          `}
            >
              Start
            </button>
            <button
              onClick={canPause ? pause : () => null}
              className={`bg-light p-8 rounded-xl text-xl font-semibold w-[10rem] shadow-lg ${
                status === "paused" && "bg-gradient-to-r from-navy to-grey"
              }
          ${!canPause && "cursor-not-allowed"}
          `}
            >
              Pause
            </button>
            <button
              onClick={canEnd ? end : () => null}
              className={`absolute bottom-2 right-2 bg-light px-2 py-1 text-sm rounded ${
                !canEnd && "cursor-not-allowed"
              }`}
            >
              end
            </button>
          </>
        )}
      </div>
    </>
  );
}
