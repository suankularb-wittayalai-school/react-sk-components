// Types
import { FAB as FABType, SKComponent } from "../../utils/types";

export interface FABProps extends SKComponent {
  content: FABType;
  color?: "primary" | "secondary" | "tertiary" | "surface" | "error";
  onClick: Function;
  attr?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

/**
 * The Floating Action Button represents the most important action on a screen
 * @param content The icon and the label of the FAB
 * @param onClick The action triggered when the FAB is clicked
 */
const FAB = ({
  content,
  color,
  onClick,
  className,
  style,
  attr,
}: FABProps): JSX.Element => (
  <button
    autoFocus={attr?.autoFocus}
    className={`${
      content.type == "small"
        ? "fab--small"
        : content.type == "large"
        ? "fab--large"
        : content.type == "extended"
        ? "fab--extended"
        : "fab"
    } ${
      color == "secondary"
        ? "fab--secondary"
        : color == "tertiary"
        ? "fab--tertiary"
        : color == "surface"
        ? "fab--surface"
        : color == "error"
        ? "fab--error"
        : "fab--primary"
    } ${className || ""}
    `}
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
    onClick={() => onClick()}
  >
    <div className="fab__content">
      <div className="fab__icon">{content.icon}</div>
      {content.type == "extended" && <span>{content.label}</span>}
    </div>
  </button>
);

export default FAB;
