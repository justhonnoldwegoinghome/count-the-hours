import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export function StartButton({ start }: { start: () => void }) {
  return (
    <button
      onClick={start}
      className="h-[80px] w-[80px] bg-yellow-200 rounded-full"
    >
      <PlayArrowIcon fontSize="large" sx={{ color: "#14274E" }} />
    </button>
  );
}
