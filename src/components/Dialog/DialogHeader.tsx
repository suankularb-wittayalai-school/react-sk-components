// Modules
import Button from "../Button/Button";
import MaterialIcon from "../Icon/MaterialIcon";

export interface DialogHeaderProps {
  name: string;
  closeIcon?: JSX.Element;
  submitName?: string;
  onClose: Function;
  onSubmit?: Function;
}

const DialogHeader = ({
  name,
  closeIcon,
  submitName,
  onClose,
  onSubmit,
}: DialogHeaderProps): JSX.Element => {
  return (
    <div className="dialog__header">
      <div className="dialog__top-app-bar">
        <Button
          type="text"
          iconOnly
          icon={closeIcon ? closeIcon : <MaterialIcon icon="close" />}
          onClick={() => onClose()}
          className="dialog__top-app-bar__close"
        />
        <h1 id={name}>{name}</h1>
        {onSubmit && (
          <Button
            name={submitName || "Submit"}
            type="text"
            onClick={() => onSubmit()}
          />
        )}
      </div>
    </div>
  );
};
export default DialogHeader;
