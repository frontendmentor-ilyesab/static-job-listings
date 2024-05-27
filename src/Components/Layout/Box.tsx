import "../../CSS/Box.css";

interface BoxProps {
  children: React.ReactElement[];
  filter?: true;
  featured?: true;
}

function Box({ children, filter, featured }: BoxProps) {
  let className = "box";
  if (filter) {
    className += " box--filter";
  }
  if (featured) {
    className += " box--featured";
  }
  return <article className={className}>{children}</article>;
}

export default Box;
