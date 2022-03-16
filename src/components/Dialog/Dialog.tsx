// Modules
import { ReactNode } from "react";

// Components
import DialogHeader from "./DialogHeader";

// Types
import DialogActions, { DialogAction } from "./DialogActions";

export interface DialogProps {
  // Type
  type: "regular" | "large";
  // Header
  headerName?: string;
  closeIcon?: JSX.Element;
  // Actions
  actions?: [DialogAction] | [DialogAction, DialogAction];
  // State
  show?: boolean;
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
 * @param type `"regular" | "large"`
 * @param show If Dialog is currently visible
 * @param hasOverlay If there is a dark scrim in the background when the Dialog is shown
 */
const Dialog = ({
  type,
  headerName,
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
        aria-labelledby={headerName}
        className={type == "large" ? "dialog--large" : "dialog"}
      >
        {isBlank ? (
          children
        ) : (
          <>
            {/* Header */}
            {headerName && (
              <DialogHeader
                name={headerName}
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
