import { useEffect, useState } from "react";

import { calculateSecondsElapsed } from "@/utils";
import { Session, Status } from "@/types";

type Timer = ReturnType<typeof setInterval>;

export function useStopWatch({
  sessions,
  status,
  setSessions,
}: {
  sessions: Session[];
  status: Status;
  setSessions: (sessions: Session[]) => void;
}) {
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [intervalId, setIntervalId] = useState<Timer | null>(null);

  useEffect(() => {
    setSecondsElapsed(calculateSecondsElapsed(sessions));
  }, []);

  useEffect(() => {
    if (status === "default" || status === "paused") {
      intervalId !== null && clearInterval(intervalId);
      return;
    }

    setIntervalId(
      setInterval(
        () => setSecondsElapsed(calculateSecondsElapsed(sessions)),
        1000
      )
    );
  }, [status]);

  return {
    secondsElapsed,

    start: () =>
      setSessions([...sessions, { start: new Date().toISOString() }]),

    pause: () => {
      sessions[sessions.length - 1]["end"] = new Date().toISOString();
      setSessions([...sessions]);
    },

    reset: () => {
      setSecondsElapsed(0);
      setSessions([]);
    },
  };
}
