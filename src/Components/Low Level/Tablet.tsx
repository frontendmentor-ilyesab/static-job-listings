import "../../CSS/Tablet.css";

interface TabletProps {
  text: string;
  asLabel?: true;
  onClick?: (tag: string) => void;
}

function Tablet({ text, asLabel, onClick }: TabletProps) {
  if (asLabel) {
    return <span className="tablet tablet--label">{text}</span>;
  }
  return (
    <button
      className="tablet"
      onClick={() => {
        if (onClick) {
          onClick(text);
        }
      }}
    >
      {text}
    </button>
  );
}

export default Tablet;
