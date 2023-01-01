import { useState, MouseEvent } from "react";

import { format } from "@/utils/format";
import { Status } from "@/types";

export function Display({
  secondsElapsed,
  status,
}: {
  secondsElapsed: number;
  status: Status;
}) {
  const [displayDuration, setDisplayDuration] = useState(false);

  const peek = (e: MouseEvent) => setDisplayDuration(true);
  const hide = (e: MouseEvent) => setDisplayDuration(false);

  return (
    <div
      onMouseDown={peek}
      onMouseUp={hide}
      className={`w-full h-[100px] flex items-center justify-center bg-steel ${
        status === "default"
          ? "hidden"
          : status === "started"
          ? "animate-pulse"
          : ""
      }
      ${displayDuration && "bg-white ring-4 ring-navy"}`}
    >
      {displayDuration && (
        <p className="text-3xl">{format.secondsToDuration(secondsElapsed)}</p>
      )}
    </div>
  );
}
