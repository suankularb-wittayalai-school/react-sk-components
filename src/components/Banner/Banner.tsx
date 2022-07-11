// Modules
import { motion } from "framer-motion";

// Components
import ActionsChildren from "../Actions/ActionsChildren";

// Animations
import { animationTransition } from "../../utils/animations/config";

// Types
import { ActionsChildrenProps } from "../Actions/ActionsChildren";
import { LinkElement as LinkElementType, SKComponent } from "../../utils/types";

// Helpers
import { classNames } from "../../utils/helpers/elements";

export type BannerAction = {
  label: string;
  disabled?: boolean | undefined;
  isDangerous?: boolean | undefined;
} & ({ type: "button"; onClick: () => void } | { type: "link"; url: string });

export interface BannerProps extends SKComponent {
  id: string;
  type: "info" | "notice" | "warning";
  icon?: JSX.Element;
  title?: string;
  supportingText: string | JSX.Element;
  actions: [BannerAction] | [BannerAction, BannerAction];
  LinkElement?: LinkElementType;
}

const Banner = ({
  id,
  type,
  icon,
  title,
  supportingText,
  actions,
  LinkElement,
  className,
  style,
}: BannerProps): JSX.Element => (
  <motion.section
    key={id}
    initial={{ x: 360, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 360, opacity: 0 }}
    transition={animationTransition}
    role="warning"
    className={classNames(["banner", `banner--${type}`, className])}
    style={style}
  >
    {title && (
      <div className="banner__header">
        {icon}
        <h3>{title}</h3>
      </div>
    )}
    {typeof supportingText == "string" ? (
      <p>{supportingText}</p>
    ) : (
      supportingText
    )}
    <div className="banner__actions">
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
  </motion.section>
);

export default Banner;
