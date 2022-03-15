// Modules
import { ReactNode } from "react";

interface DialogProps {
  type: "regular" | "large";
  show?: boolean;
  hasOverlay?: boolean;
  children?: ReactNode;
}

/**
 * Dialog presents immediate information and prompts the user to make crucial decisions
 * @param type `"regular" | "large"`
 * @param show If Dialog is currently visible
 * @param hasOverlay If there is a dark scrim in the background when the Dialog is shown
 */
const Dialog = ({
  type,
  show,
  hasOverlay,
  children,
}: DialogProps): JSX.Element => {
  return (
    <div className={`dialog__wrapper ${show ? "show" : ""}`}>
      {/* Overlay */}
      {hasOverlay && <div className="overlay" />}

      {/* Dialog */}
      <dialog className={type == "large" ? "dialog--large" : "dialog"}>
        {children}
      </dialog>
    </div>
  );
};

export default Dialog;
