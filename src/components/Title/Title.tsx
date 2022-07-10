// Components
import MaterialIcon from "../Icon/MaterialIcon";

// Types
import { LinkElement as LinkElementType, SKComponent } from "../../utils/types";

/**
 * The Icons section of Title, shaped like a pill
 * @param pageIcon The icon that symobolises the page
 * @param backGoesTo The link in which clicking Back icon will lead to, or the function which will be triggered
 * @param backIcon The Back icon
 * @param LinkElement The element wrapping the Anchor (i.e. `Link` from `next/link`)
 */
const TitleIcons = ({
  pageIcon,
  backGoesTo,
  backIcon,
  LinkElement,
}: {
  pageIcon: JSX.Element;
  backGoesTo: string | Function;
  backIcon?: JSX.Element;
  LinkElement?: LinkElementType;
}) => {
  const BackIconElement = () =>
    backIcon ? backIcon : <MaterialIcon icon="arrow_back" />;
  return (
    <div className="title__icons">
      {backGoesTo instanceof Function ? (
        <button className="title__icons__back" onClick={() => backGoesTo()}>
          <BackIconElement />
        </button>
      ) : LinkElement ? (
        <LinkElement href={backGoesTo}>
          <a className="title__icons__back">
            <BackIconElement />
          </a>
        </LinkElement>
      ) : (
        <a href={backGoesTo} className="title__icons__back">
          <BackIconElement />
        </a>
      )}
      <div className="title__icons__page">{pageIcon}</div>
    </div>
  );
};

export interface TitleProps extends SKComponent {
  name: { title: string; subtitle?: string };
  pageIcon: JSX.Element;
  backGoesTo?: string | Function;
  backIcon?: JSX.Element;
  LinkElement?: LinkElementType;
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
      {backGoesTo && (
        <TitleIcons
          pageIcon={pageIcon}
          backGoesTo={backGoesTo}
          backIcon={backIcon}
          LinkElement={LinkElement}
        />
      )}
      <div className="title__text">
        <h1>{name.title}</h1>
        {name.subtitle && <p>{name.subtitle}</p>}
      </div>
    </div>
  </header>
);

export default Title;
