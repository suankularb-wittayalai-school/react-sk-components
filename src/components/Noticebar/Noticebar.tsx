// Modules
import { motion } from "framer-motion";

// Components
import { ActionsChildren } from "../Actions";

// Animation
import { animationTransition } from "../../utils/animations/config";

// Types
import { ActionsChildrenProps } from "../Actions/ActionsChildren";
import { BannerAction } from "../Banner/Banner";
import { LinkElement, SKComponent } from "../../utils/types";

// Helpers
import { classNames } from "../../utils/helpers/elements";

export interface NoticebarProps extends SKComponent {
  id: string;
  type: "info" | "notice" | "warning";
  icon?: JSX.Element;
  title?: string;
  message: string | JSX.Element;
  actions: [] | [BannerAction] | [BannerAction, BannerAction];
  LinkElement?: LinkElement;
}

const Noticebar = ({
  id,
  type,
  icon,
  title,
  message,
  actions,
  LinkElement,
  className,
  style,
}: NoticebarProps): JSX.Element => (
  <motion.div
    key={id}
    initial={{ x: 360, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 360, opacity: 0 }}
    transition={animationTransition}
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
  </motion.div>
);

export default Noticebar;
