import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export function StartButton({ start }: { start: () => void }) {
  return (
    <button onClick={start} className="h-[80px] w-[80px] bg-steel rounded-full">
      <PlayArrowIcon fontSize="large" sx={{ color: "#F1F6F9" }} />
    </button>
  );
}
