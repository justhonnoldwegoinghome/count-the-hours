import { useEffect, useState } from "react";

import { storage } from "@/utils/storage";

interface Session {
  start: string;
  end?: string;
}

type Status = "started" | "paused" | "default";

export function useLocalStorage() {
  const [init, setInit] = useState(false);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [status, setStatus] = useState<Status>("default");

  // Retrieves sessions in storage
  useEffect(() => {
    const sessionsInStorage = storage.getItem("sessions", true);
    setSessions(sessionsInStorage === null ? [] : sessionsInStorage);
    setInit(true);
  }, []);

  // Syncs sessions in memory to sessions in storage
  useEffect(() => {
    init && storage.setItem("sessions", sessions, true);
  }, [sessions]);

  // Derives status from sessions
  useEffect(() => {
    if (sessions.length === 0) {
      setStatus("default");
    } else if (sessions[sessions.length - 1]["end"]) {
      setStatus("paused");
    } else {
      setStatus("started");
    }
  }, [sessions]);

  return {
    init,
    sessions,
    status,
    setSessions,
  };
}
