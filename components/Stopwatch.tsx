import { Session, Status } from "@/types";
import { useStopWatch } from "@/hooks/useStopWatch";

import { Display } from "./Display";
import { PauseButton } from "./PauseButton";
import { StartButton } from "./StartButton";
import { ResetButton } from "./ResetButton";

export function Stopwatch({
  sessions,
  status,
  setSessions,
}: {
  sessions: Session[];
  status: Status;
  setSessions: (sessions: Session[]) => void;
}) {
  const { secondsElapsed, start, pause, reset } = useStopWatch({
    sessions,
    status,
    setSessions,
  });

  return (
    <div className="relative min-h-[100vh] flex items-center justify-center">
      <div className="w-full absolute top-[10vh]">
        <Display secondsElapsed={secondsElapsed} status={status} />
      </div>

      {status === "started" ? (
        <PauseButton pause={pause} />
      ) : (
        <StartButton start={start} />
      )}

      {status !== "default" && (
        <div className="absolute bottom-12 right-12">
          <ResetButton reset={reset} />
        </div>
      )}
    </div>
  );
}
