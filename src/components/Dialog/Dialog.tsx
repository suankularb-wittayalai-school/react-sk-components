// Modules
import { ReactNode } from "react";

// Components
import DialogHeader from "./DialogHeader";

// Types
import DialogActions, { DialogAction } from "./DialogActions";

export interface DialogProps {
  // General
  type: "regular" | "large";
  label: string;
  // Header
  title: string | JSX.Element;
  icon?: JSX.Element;
  supportingText?: string | JSX.Element;
  closeIcon?: JSX.Element;
  // Actions
  actions?: [DialogAction] | [DialogAction, DialogAction];
  // State
  show: boolean;
  // Attrs
  noOverlay?: boolean;
  noBlurToClose?: boolean;
  isBlank?: boolean;
  // Callbacks
  onClose: Function;
  onSubmit?: Function;
  // Children
  children?: ReactNode;
}

/**
 * Dialog presents information in need of immediate attention and prompts the user to make crucial decisions
 * 
 * ---
 * **General**
 * @param type `"regular" | "large"`
 * @param label The text label for screenreaders
 * 
 * ---
 * **Header**
 * @param title The text to show on top of the Dialog, summarises the content
 * @param icon The hero icon on top of title text, will make header centered
 * @param supportingText A paragraph explaining the title in more detail
 * @param closeIcon On mobile, an icon button closes the Dialog; this icon can be customized here
 * 
 * ---
 * **Actions**
 * @param actions An array of 1-2 action(s), each includes `name`, `type`, and `isDangerous`
 * 
 * ---
 * **State**
 * @param show If Dialog is currently visible
 * 
 * ---
 * **Attrs**
 * @param noOverlay Removes the dark scrim in the background when the Dialog is shown
 * @param noBlurToClose The user cannot click outside Dialog to close it
 * @param isBlank Removes all default components
 * 
 * ---
 * **Callbacks**
 * @param onClose Triggered when button with type `close` or close button is clicked/tapped
 * @param onSubmit Triggered when button with type `submit` is clicked/tapped
 */
const Dialog = ({
  type,
  label,
  title,
  icon,
  supportingText,
  closeIcon,
  actions,
  show,
  noOverlay,
  noBlurToClose,
  isBlank,
  onClose,
  onSubmit,
  children,
}: DialogProps): JSX.Element => {
  return (
    <div className={`dialog__wrapper ${show ? "show" : ""}`}>
      {/* Overlay */}
      {noOverlay || (
        <div className="overlay" onClick={() => noBlurToClose || onClose()} />
      )}

      {/* Dialog */}
      <dialog
        aria-hidden={!show}
        aria-labelledby={label}
        className={type == "large" ? "dialog--large" : "dialog"}
      >
        {isBlank ? (
          children
        ) : (
          <>
            {/* Header */}
            {title && (
              <DialogHeader
                label={label}
                title={title}
                icon={icon}
                supportingText={supportingText}
                closeIcon={closeIcon}
                submitName={
                  actions?.find((action) => action.type == "submit")?.name
                }
                onClose={() => onClose()}
                onSubmit={onSubmit ? () => onSubmit() : undefined}
              />
            )}

            {/* Content */}
            {children}

            {/* Actions */}
            {actions && (
              <DialogActions
                actions={actions}
                onClose={() => onClose()}
                onSubmit={onSubmit ? () => onSubmit() : undefined}
              />
            )}
          </>
        )}
      </dialog>
    </div>
  );
};

export default Dialog;
