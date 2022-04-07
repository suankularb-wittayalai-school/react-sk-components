// Components
import Button from "../Button/Button";
import MaterialIcon from "../Icon/MaterialIcon";

// Types
import { SKComponent } from "../../utils/types";

export interface DialogHeaderProps extends SKComponent {
  label: string;
  title: string | JSX.Element;
  icon?: JSX.Element;
  supportingText?: string | JSX.Element;
  closeIcon?: JSX.Element;
  submitName?: string;
  onClose: Function;
  onSubmit?: Function;
}

/**
 * The header of the Dialog, includes the title and some supporting text
 * @param title The text to show on top of the Dialog, summarises the content
 * @param icon The hero icon on top of title text, will make header centered
 * @param supportingText A paragraph explaining the title in more detail
 * @param closeIcon On mobile, an icon button closes the Dialog; this icon can be customized here
 * @param submitName Submit button text
 * @param onClose Triggered when close button is clicked/tapped
 * @param onSubmit Triggered when button with type `submit` is clicked/tapped
 */
const DialogHeader = ({
  label,
  title,
  icon,
  supportingText,
  closeIcon,
  submitName,
  onClose,
  onSubmit,
  className,
  style,
}: DialogHeaderProps): JSX.Element => {
  return (
    <div className={`dialog__header ${className}`} style={style}>
      <div className="dialog__top-app-bar">
        <Button
          type="text"
          iconOnly
          icon={closeIcon ? closeIcon : <MaterialIcon icon="close" />}
          onClick={() => onClose()}
          className="dialog__top-app-bar__close"
        />
        {icon ? (
          <div className="dialog__hero">
            <div className="dialog__hero__icon">{icon}</div>
            <h1 id={label}>{title}</h1>
          </div>
        ) : (
          <h1 id={label}>{title}</h1>
        )}
        {onSubmit && (
          <Button
            label={submitName || "Submit"}
            type="text"
            onClick={() => onSubmit()}
          />
        )}
      </div>
      {supportingText && typeof supportingText == "string" ? (
        <p>{supportingText}</p>
      ) : (
        supportingText
      )}
    </div>
  );
};
export default DialogHeader;
