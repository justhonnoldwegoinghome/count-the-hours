export interface Session {
  start: string;
  end?: string;
}

export type Status = "started" | "paused" | "default";
