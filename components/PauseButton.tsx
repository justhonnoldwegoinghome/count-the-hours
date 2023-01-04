import PauseIcon from "@mui/icons-material/Pause";

export function PauseButton({ pause }: { pause: () => void }) {
  return (
    <button
      onClick={pause}
      className="h-[80px] w-[80px] bg-yellow-200 rounded-full"
    >
      <PauseIcon fontSize="large" sx={{ color: "#14274E" }} />
    </button>
  );
}
