import "../../CSS/ClearButton.css";

interface ClearButtonProps {
  onClick: () => void;
}

function ClearButton({ onClick }: ClearButtonProps) {
  return (
    <button onClick={onClick} className="clear-button">
      clear
    </button>
  );
}

export default ClearButton;
