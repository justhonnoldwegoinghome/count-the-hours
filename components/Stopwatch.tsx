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
    <div className="bg-navy min-h-[100vh] flex items-center justify-center">
      <div className="flex flex-col justify-center items-center gap-24">
        <Display secondsElapsed={secondsElapsed} status={status} />

        {status === "started" ? (
          <PauseButton pause={pause} />
        ) : (
          <StartButton start={start} />
        )}
      </div>

      {status !== "default" && (
        <div className="absolute bottom-8 right-8">
          <ResetButton reset={reset} />
        </div>
      )}
    </div>
  );
}
