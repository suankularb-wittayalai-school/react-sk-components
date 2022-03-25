// Types
import {
  FAB as FABType,
  LinkElement as LinkElementType,
  SKComponent,
} from "../../utils/types";

export interface FABProps extends SKComponent {
  content: FABType;
  color?: "primary" | "secondary" | "tertiary" | "surface" | "error";
  url: string;
  LinkElement: LinkElementType;
  attr?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}

/**
 * The Floating Action Button represents the most important action on a screen
 * @param content The icon and the label of the FAB
 * @param url The location of the page this Link Button leads to
 * @param LinkElement The element wrapping the Anchor (i.e. `Link` from `next/link`)
 */
const FAB = ({
  content,
  color,
  url,
  LinkElement,
  className,
  style,
  attr,
}: FABProps): JSX.Element =>
  LinkElement ? (
    <LinkElement href={url}>
      <a
        className={`
        ${
          content.type == "small"
            ? "fab--small"
            : content.type == "large"
            ? "fab--large"
            : content.type == "extended"
            ? "fab--extended"
            : "fab"
        } ${className || ""}
      `}
        style={style}
      >
        <div className="fab__icon">{content.icon}</div>
        {content.type == "extended" && <span>{content.label}</span>}
      </a>
    </LinkElement>
  ) : (
    <a
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
      <div className="fab__content">
        <div className="fab__icon">{content.icon}</div>
        <span>
          {content.type == "extended" && <span>{content.label}</span>}
        </span>
      </div>
    </a>
  );

export default FAB;
