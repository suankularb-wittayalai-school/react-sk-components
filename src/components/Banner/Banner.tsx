// Components
import ActionsChildren from "../Actions/ActionsChildren";

// Types
import { ActionsChildrenProps } from "../Actions/ActionsChildren";
import { LinkElement as LinkElementType } from "../../utils/types";

// Helpers
import { classNames } from "../../utils/helpers/elements";

export type BannerAction = {
  label: string;
  disabled?: boolean | undefined;
  isDangerous?: boolean | undefined;
} & ({ type: "button"; onClick: () => void } | { type: "link"; url: string });

export interface BannerProps {
  type: "info" | "notice" | "warning";
  icon?: JSX.Element;
  title?: string;
  supportingText: string | JSX.Element;
  actions: [BannerAction] | [BannerAction, BannerAction];
  LinkElement?: LinkElementType;
}

const Banner = ({
  type,
  icon,
  title,
  supportingText,
  actions,
  LinkElement,
}: BannerProps): JSX.Element => (
  <section role="warning" className={classNames(["banner", `banner--${type}`])}>
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
  </section>
);

export default Banner;
