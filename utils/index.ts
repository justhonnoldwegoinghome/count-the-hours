import { differenceInSeconds } from "date-fns";

import { Session } from "@/types";

export function calculateSecondsElapsed(sessions: Session[]) {
  let secondsElapsed = 0;

  for (const s of sessions) {
    if (s["end"]) {
      secondsElapsed += differenceInSeconds(
        new Date(s["end"]),
        new Date(s["start"])
      );
    } else {
      secondsElapsed += differenceInSeconds(new Date(), new Date(s["start"]));
    }
  }

  return secondsElapsed;
}
