import "../../CSS/Badge.css";

interface BadgeProps {
  type: "new" | "featured";
}

function Badge({ type }: BadgeProps) {
  return (
    <span
      className={`badge ${type === "new" ? "badge--new" : "badge--featured"}`}
    >
      {type === "new" ? type + "!" : type}
    </span>
  );
}

export default Badge;
