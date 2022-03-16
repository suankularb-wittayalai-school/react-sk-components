// Modules
import Button from "../Button/Button";
import MaterialIcon from "../Icon/MaterialIcon";

export interface DialogHeaderProps {
  title: string;
  icon?: JSX.Element;
  supportingText?: string | JSX.Element;
  closeIcon?: JSX.Element;
  submitName?: string;
  isHero?: boolean;
  onClose: Function;
  onSubmit?: Function;
}

const DialogHeader = ({
  title,
  icon,
  supportingText,
  closeIcon,
  submitName,
  onClose,
  onSubmit,
}: DialogHeaderProps): JSX.Element => {
  return (
    <div className="dialog__header">
      {icon ? (
        <div className="dialog__hero">
          <div className="dialog__hero__icon">{icon}</div>
          <h1>{title}</h1>
        </div>
      ) : (
        <div className="dialog__top-app-bar">
          <Button
            type="text"
            iconOnly
            icon={closeIcon ? closeIcon : <MaterialIcon icon="close" />}
            onClick={() => onClose()}
            className="dialog__top-app-bar__close"
          />
          <h1 id={title}>{title}</h1>
          {onSubmit && (
            <Button
              name={submitName || "Submit"}
              type="text"
              onClick={() => onSubmit()}
            />
          )}
        </div>
      )}
      {supportingText && <p>{supportingText}</p>}
    </div>
  );
};
export default DialogHeader;
