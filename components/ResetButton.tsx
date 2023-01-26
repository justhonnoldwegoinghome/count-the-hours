import RestartAltIcon from "@mui/icons-material/RestartAlt";

export function ResetButton({ reset }: { reset: () => void }) {
  return (
    <button onClick={reset} className="p-2 bg-black rounded-full">
      <RestartAltIcon fontSize="medium" sx={{ color: "white" }} />
    </button>
  );
}
