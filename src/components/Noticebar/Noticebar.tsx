// Components
import { ActionsChildren } from "../Actions";

// Types
import { BannerAction } from "../Banner/Banner";
import { LinkElement, SKComponent } from "../../utils/types";

// Helpers
import { classNames } from "../../utils/helpers/elements";
import { ActionsChildrenProps } from "../Actions/ActionsChildren";

export interface NoticebarProps extends SKComponent {
  type: "info" | "notice" | "warning";
  icon?: JSX.Element;
  title?: string;
  message: string | JSX.Element;
  actions: [BannerAction] | [BannerAction, BannerAction];
  LinkElement?: LinkElement;
}

const Noticebar = ({
  type,
  icon,
  title,
  message,
  actions,
  LinkElement,
  className,
  style,
}: NoticebarProps): JSX.Element => (
  <div
    role="alert"
    className={classNames(["noticebar", `noticebar--${type}`, className])}
    style={style}
  >
    <div className="noticebar__content">
      {icon}
      {typeof message == "string" ? (
        <p>
          {title && <strong className="noticebar__header">{title}</strong>}
          {message}
        </p>
      ) : (
        <div>
          {title && <strong className="noticebar__header">{title}</strong>}
          {message}
        </div>
      )}
    </div>
    <div className="noticebar__actions">
      <ActionsChildren
        actions={
          actions.map((action) => ({
            ...action,
            appearance: "text",
          })) as ActionsChildrenProps["actions"]
        }
        LinkElement={LinkElement}
      />
    </div>
  </div>
);

export default Noticebar;
