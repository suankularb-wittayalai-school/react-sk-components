// Components
import MaterialIcon from "../Icon/MaterialIcon";

// Types
import { SKComponent } from "../../utils/types";

export interface CardHeaderProps extends SKComponent {
  icon?: string | JSX.Element;
  title: JSX.Element;
  label?: string | JSX.Element;
  end?: JSX.Element;
}

/**
 * The header of Card, the only required element of Card
 * @param icon Icon that represents this Card
 * @param title The biggest text in Card, tells the user what this Card is about
 * @param label Smaller text under title
 * @param end The element at the right end of the header
 */
const CardHeader = ({
  icon,
  title,
  label,
  end,
  className,
  style
}: CardHeaderProps): JSX.Element => (
  <div className={`card__header ${className || ""}`} style={style}>
    {icon && (
      <div className="card__icon">
        {typeof icon == "string" ? <MaterialIcon icon={icon} /> : icon}
      </div>
    )}
    <div className="card__header__text">
      {title}
      {typeof label == "string" ? <p>{label}</p> : label}
    </div>
    {end}
  </div>
);

export default CardHeader;
