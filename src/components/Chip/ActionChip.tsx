// Types
import { SKComponent } from "../../utils/types";

export interface ActionChipProps extends SKComponent {
  name?: string;
  type?: "filled" | "tonal";
  icon: JSX.Element;
  onClick?: Function;
  attr?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const ActionChip = ({
  name,
  type,
  icon,
  onClick,
  attr,
  className,
  style,
}: ActionChipProps): JSX.Element => (
  <button
    aria-label={name}
    autoFocus={attr?.autoFocus}
    className={`${type == "filled" ? "btn-chip--filled" : "btn-chip"} ${
      className || ""
    }`}
    disabled={attr?.disabled}
    form={attr?.form}
    formAction={attr?.formAction}
    formEncType={attr?.formEncType}
    formMethod={attr?.formMethod}
    formNoValidate={attr?.formNoValidate}
    formTarget={attr?.formTarget}
    name={attr?.name}
    style={style}
    type={attr?.type}
    value={attr?.value}
    onClick={() => onClick && onClick()}
  >
    <div className="chip__icon">{icon}</div>
  </button>
);

export default ActionChip;
