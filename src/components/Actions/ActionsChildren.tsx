// Components
import Button from "../Button";
import LinkButton from "../LinkButton";

// Types
import { ButtonProps } from "../Button/Button";
import { LinkElement, SKComponent } from "../../utils/types";

// Helpers
import { classNames } from "../../utils/helpers/elements";

export type Action = {
  appearance: ButtonProps["type"];
  label: string;
  disabled?: boolean;
  isDangerous?: boolean;
} & ({ type: "button"; onClick: () => void } | { type: "link"; url: string });

export interface ActionsChildrenProps extends SKComponent {
  actions: [Action] | [Action, Action];
  LinkElement?: LinkElement;
}

const ActionsChildren = ({
  actions,
  LinkElement,
}: ActionsChildrenProps): JSX.Element => (
  <>
    {actions.map((action) =>
      action.type == "button" ? (
        <Button
          key={action.label}
          type={action.appearance}
          label={action.label}
          disabled={action.disabled}
          onClick={action.onClick}
          className={classNames([
            "btn btn--text",
            action.isDangerous && "btn--danger",
          ])}
        />
      ) : action.type == "link" ? (
        <LinkButton
          key={action.label}
          type={action.appearance}
          label={action.label}
          disabled={action.disabled}
          url={action.url}
          className={classNames([
            "btn btn--text",
            action.isDangerous && "btn--danger",
          ])}
          LinkElement={LinkElement}
        />
      ) : null
    )}
  </>
);

export default ActionsChildren;
