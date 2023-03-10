import { useState, MouseEvent, TouchEvent } from "react";

import { format } from "@/utils/format";
import { Status } from "@/types";

export function Display({
  secondsElapsed,
  status,
  numSessions,
}: {
  secondsElapsed: number;
  status: Status;
  numSessions: number;
}) {
  const [displayDuration, setDisplayDuration] = useState(false);

  const peek = (e: MouseEvent | TouchEvent) => setDisplayDuration(true);
  const hide = (e: MouseEvent | TouchEvent) => setDisplayDuration(false);

  return (
    <div
      onTouchStart={peek}
      onTouchEnd={hide}
      onMouseDown={peek}
      onMouseUp={hide}
      className={`mx-auto relative w-[300px] h-[200px] ring-4 ring-black rounded-3xl flex items-center justify-center bg-white ${
        status === "default"
          ? "hidden"
          : status === "started"
          ? "animate-pulse"
          : ""
      }
      ${displayDuration && "bg-white animate-none ring-4 ring-navy"}`}
    >
      {displayDuration && (
        <>
          <p className="text-5xl">{format.secondsToDuration(secondsElapsed)}</p>
          <p className="absolute bottom-4 right-8">{numSessions}</p>
        </>
      )}
    </div>
  );
}
