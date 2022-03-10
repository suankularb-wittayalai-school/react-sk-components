// Styles
import "@suankularb-components/css/dist/css/suankularb-components.min.css";

// Types
import { LinkElement as LinkElementType } from "../../utils/types";

/**
 * The Icons section of Title, shaped like a pill
 * @param pageIcon The icon that symobolises the page
 * @param backGoesTo The link in which clicking Back icon will lead to
 * @param backIcon The Back icon
 * @param LinkElement The element wrapping the Anchor (i.e. `Link` from `next/link`)
 */
const TitleIcons = ({
  pageIcon,
  backGoesTo,
  backIcon,
  LinkElement,
}: {
  pageIcon: JSX.Element | string;
  backGoesTo: string;
  backIcon?: JSX.Element | string;
  LinkElement?: LinkElementType;
}) => {
  const BackIconElement = () =>
    backIcon ? (
      // If backIcon is a string, render Material Icon of that string
      typeof backIcon == "string" ? (
        <i className="icon" translate="no">
          {backIcon}
        </i>
      ) : (
        // If backIcon is a JSX Element, render it as is
        backIcon
      )
    ) : (
      // Default
      <i className="icon" translate="no">
        arrow_back
      </i>
    );
  return (
    <div className="title__icons">
      {LinkElement ? (
        <LinkElement href={backGoesTo}>
          <a className="title__icons__abck">
            <BackIconElement />
          </a>
        </LinkElement>
      ) : (
        <a href={backGoesTo} className="title__icons__back">
          <BackIconElement />
        </a>
      )}
      <div className="title__icons__page">
        {typeof pageIcon == "string" ? (
          <i className="icon" translate="no">
            {pageIcon}
          </i>
        ) : (
          pageIcon
        )}
      </div>
    </div>
  );
};

export interface TitleProps {
  name: { title: string; subtitle?: string };
  pageIcon: JSX.Element | string;
  backGoesTo: string;
  backIcon?: JSX.Element;
  LinkElement?: LinkElementType;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Title summarises what the page is about in very few words
 *
 * Title requires a background gradient, apply background gradient with a class or a style entry
 * @param name.title The name of the page
 * @param name.subtitle Some more info about the page (i.e. the type of the page)
 * @param pageIcon The icon that symobolises the page
 * @param backGoesTo The link in which clicking Back icon will lead to
 * @param backIcon The Back icon
 * @param LinkElement The element wrapping the Anchor (i.e. `Link` from `next/link`)
 */
const Title = ({
  name,
  pageIcon,
  backGoesTo,
  backIcon,
  LinkElement,
  className,
  style,
}: TitleProps) => (
  <header className={`title ${className || ""}`} style={style}>
    <div className="title__content">
      <TitleIcons
        pageIcon={pageIcon}
        backGoesTo={backGoesTo}
        backIcon={backIcon}
        LinkElement={LinkElement}
      />
      <div className="title__text">
        <h1>{name.title}</h1>
        {name.subtitle && <p>{name.subtitle}</p>}
      </div>
    </div>
  </header>
);

export default Title;
