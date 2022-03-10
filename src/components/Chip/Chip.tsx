interface ChipProps {
  name: string;
  leadingIcon?: JSX.Element;
  trailingIcon?: JSX.Element;
  avatar?: JSX.Element;
  onClick?: Function;
  onClose?: Function;
  className?: string;
  style?: React.CSSProperties;
}

const Chip = ({
  name,
  avatar,
  leadingIcon,
  trailingIcon,
  onClick,
  onClose,
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
    } ${className || ""}`}
  >
    {avatar && <div className="chip__avatar">{avatar}</div>}
    {leadingIcon && <div className="chip__icon">{leadingIcon}</div>}
    <span>{name}</span>
    {trailingIcon && <div className="chip__icon">{trailingIcon}</div>}
  </button>
);

export default Chip;
