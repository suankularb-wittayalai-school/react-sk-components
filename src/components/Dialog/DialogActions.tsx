// Components
import Button from "../Button";

// Types
import { SKComponent } from "../../utils/types";

export type DialogAction = {
  name: string;
  type: "close" | "submit";
  isDangerous?: boolean;
};

export interface DialogActionsProps extends SKComponent {
  actions: [DialogAction] | [DialogAction, DialogAction];
  onClose: Function;
  onSubmit?: Function;
}

/**
 * @param actions An array of 1-2 action(s), each includes `name`, `type`, and `isDangerous`
 * @param onClose Triggered when button with type `close` or close button is clicked/tapped
 * @param onSubmit Triggered when button with type `submit` is clicked/tapped
 */
const DialogActions = ({
  actions,
  onClose,
  onSubmit,
  className,
  style,
}: DialogActionsProps) => (
  <div className={`dialog__actions ${className}`} style={style}>
    {actions.map((action) => (
      <Button
        key={action.name}
        type="text"
        name={action.name}
        className={action.isDangerous ? "btn--danger" : undefined}
        onClick={() =>
          action.type == "close"
            ? onClose()
            : action.type == "submit" && onSubmit
            ? onSubmit()
            : undefined
        }
      />
    ))}
  </div>
);

export default DialogActions;
