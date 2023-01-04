import RestartAltIcon from "@mui/icons-material/RestartAlt";

export function ResetButton({ reset }: { reset: () => void }) {
  return (
    <button onClick={reset} className="p-2 bg-yellow-200 rounded-full">
      <RestartAltIcon fontSize="medium" sx={{ color: "#14274E" }} />
    </button>
  );
}
