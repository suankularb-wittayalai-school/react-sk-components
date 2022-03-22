// Styles
import "@suankularb-components/css/dist/css/suankularb-components.min.css";

// Types
import { LinkElement as LinkElementType } from "../../utils/types";

export interface LinkProps {
  name?: string | JSX.Element;
  label?: string;
  type: "filled" | "outlined" | "text" | "tonal";
  iconOnly?: boolean;
  icon?: JSX.Element;
  url: string;
  LinkElement?: LinkElementType;
  isDangerous?: boolean;
  className?: string;
  style?: React.CSSProperties;
  attr?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}

/**
 * A Link Button redirects the user to a page
 * @param name The text in the button
 * @param type The type of the button, can be "filled" | "outlined" | "text"
 * @param icon An icon in the form of a JSX Element, will be placed in front of the text
 * @param url The location of the page this Link Button leads to
 * @param LinkElement The element wrapping the Anchor (i.e. `Link` from `next/link`)
 * @param isDangerous If the button triggers some dangerous action, makes Button have danger color
 */
const LinkButton = ({
  name,
  label,
  type,
  iconOnly,
  icon,
  url,
  LinkElement,
  isDangerous,
  className,
  style,
  attr,
}: LinkProps) =>
  LinkElement ? (
    <LinkElement href={url}>
      <a
        aria-label={label}
        className={`${
          type == "outlined"
            ? "btn--outlined"
            : type == "text"
            ? "btn--text"
            : type == "tonal"
            ? "btn--tonal"
            : "btn--filled"
        } ${iconOnly ? "btn--icon" : icon ? "btn--has-icon" : ""} ${
          isDangerous ? "btn--danger" : ""
        } ${className || ""}`}
        style={style}
      >
        {icon}
        {name && <span>{name}</span>}
      </a>
    </LinkElement>
  ) : (
    <a
      aria-label={label}
      className={`${
        type == "outlined"
          ? "btn--outlined"
          : type == "text"
          ? "btn--text"
          : type == "tonal"
          ? "btn--tonal"
          : "btn--filled"
      } ${iconOnly ? "btn--icon" : icon ? "btn--has-icon" : ""} ${
        isDangerous ? "btn--danger" : ""
      } ${className || ""}`}
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
      {name && <span>{name}</span>}
    </a>
  );

export default LinkButton;
