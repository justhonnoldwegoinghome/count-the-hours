import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export function StartButton({ start }: { start: () => void }) {
  return (
    <button onClick={start} className="h-[80px] w-[80px] bg-black rounded-full">
      <PlayArrowIcon fontSize="large" sx={{ color: "white" }} />
    </button>
  );
}
