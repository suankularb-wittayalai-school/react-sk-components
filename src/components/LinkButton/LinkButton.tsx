// Types
import { SKComponent, LinkElement as LinkElementType } from "../../utils/types";

export interface LinkProps extends SKComponent {
  name?: string;
  label?: string | JSX.Element;
  type: "filled" | "outlined" | "text" | "tonal";
  icon?: JSX.Element;
  url: string;
  LinkElement?: LinkElementType;
  iconOnly?: boolean;
  disabled?: boolean;
  isDangerous?: boolean;
  attr?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}

/**
 * A Link Button redirects the user to a page
 * @param name The text label for screenreaders
 * @param label The text in the button
 * @param type The type of the button, can be "filled" | "outlined" | "text"
 * @param icon An icon in the form of a JSX Element, will be placed in front of the text
 * @param url The location of the page this Link Button leads to
 * @param LinkElement The element wrapping the Anchor (i.e. `Link` from `next/link`)
 * @param disabled If the button is not available
 * @param isDangerous If the button triggers some dangerous action, makes Button have danger color
 */
const LinkButton = ({
  name,
  label,
  type,
  icon,
  url,
  LinkElement,
  iconOnly,
  disabled,
  isDangerous,
  attr,
  className,
  style,
}: LinkProps) => {
  const btnClassName = `${
    type == "outlined"
      ? "btn--outlined"
      : type == "text"
      ? "btn--text"
      : type == "tonal"
      ? "btn--tonal"
      : "btn--filled"
  } ${iconOnly ? "btn--icon" : icon ? "btn--has-icon" : ""} ${
    disabled ? "btn--disabled" : ""
  } ${isDangerous ? "btn--danger" : ""} ${className || ""}`;

  return disabled ? (
    <a
      aria-disabled={true}
      aria-label={name}
      className={btnClassName}
      role="link"
      style={style}
    >
      {icon}
      {label && <span>{label}</span>}
    </a>
  ) : LinkElement ? (
    <LinkElement href={url}>
      <a aria-label={name} className={btnClassName} style={style}>
        {icon}
        {label && <span>{label}</span>}
      </a>
    </LinkElement>
  ) : (
    <a
      aria-label={name}
      className={btnClassName}
      download={attr?.download}
      href={url}
      hrefLang={attr?.hrefLang}
      media={attr?.media}
      ping={attr?.ping}
      rel={attr?.rel}
      target={attr?.target}
      type={attr?.type}
      referrerPolicy={attr?.referrerPolicy}
    >
      {icon}
      {label && <span>{label}</span>}
    </a>
  );
};

export default LinkButton;
