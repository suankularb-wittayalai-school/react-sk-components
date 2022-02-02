export interface ButtonProps {
  name: string;
  type: "filled" | "outlined" | "text";
  icon?: JSX.Element;
  onClick: Function;
  attr: React.ButtonHTMLAttributes<HTMLButtonElement>;
}
