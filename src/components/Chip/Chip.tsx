interface ChipProps {
  name: string;
  appearance?: "regular" | "elevated";
  selected?: boolean;
  leadingIcon?: JSX.Element;
  trailingIcon?: JSX.Element;
  avatar?: JSX.Element;
  onClick?: Function;
  className?: string;
  style?: React.CSSProperties;
}

const Chip = ({
  name,
  appearance,
  selected,
  avatar,
  leadingIcon,
  trailingIcon,
  onClick,
  className,
  style,
}: ChipProps): JSX.Element => (
  <button
    className={` ${
      leadingIcon && trailingIcon
        ? "chip--has-icons"
        : avatar && trailingIcon
        ? "chip--has-avatar-and-icon"
        : leadingIcon
        ? "chip--leading-icon"
        : trailingIcon
        ? "chip--trailing-icon"
        : avatar
        ? "chip--has-avatar"
        : "chip"
    } ${selected ? "selected" : ""} ${
      appearance == "elevated" ? "chip--elevated" : ""
    } ${className || ""}`}
    style={style}
    onClick={() => {
      if (onClick) onClick();
    }}
  >
    {avatar && <div className="chip__avatar">{avatar}</div>}
    {leadingIcon && <div className="chip__icon">{leadingIcon}</div>}
    <span>{name}</span>
    {trailingIcon && <div className="chip__icon">{trailingIcon}</div>}
  </button>
);

export default Chip;
