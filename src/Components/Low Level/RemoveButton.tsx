import RemoveIcon from "../../../images/icon-remove.svg?react";
import "../../CSS/RemoveButton.css";

interface RemoveButtonProps {
  onClick: () => void;
}

function RemoveButton({ onClick }: RemoveButtonProps) {
  return (
    <button onClick={onClick} className="remove-button">
      <RemoveIcon />
    </button>
  );
}

export default RemoveButton;
