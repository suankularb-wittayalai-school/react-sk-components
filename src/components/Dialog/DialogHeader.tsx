// Modules
import Button from "../Button/Button";
import MaterialIcon from "../Icon/MaterialIcon";

export interface DialogHeaderProps {
  name: string | JSX.Element;
  closeIcon?: JSX.Element;
  onClose: Function;
  onAccept?: Function;
}

const DialogHeader = ({
  name,
  closeIcon,
  onClose,
  onAccept,
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
        {typeof name == "string" ? <h1>{name}</h1> : name}
        <Button name="Create" type="text" onClick={() => onClose()} />
      </div>
    </div>
  );
};
export default DialogHeader;
