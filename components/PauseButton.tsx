import PauseIcon from "@mui/icons-material/Pause";

export function PauseButton({ pause }: { pause: () => void }) {
  return (
    <button onClick={pause} className="h-[80px] w-[80px] bg-steel rounded-full">
      <PauseIcon fontSize="large" sx={{ color: "#F1F6F9" }} />
    </button>
  );
}
