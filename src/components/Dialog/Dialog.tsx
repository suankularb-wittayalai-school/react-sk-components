// Modules
import { ReactNode } from "react";

interface DialogProps {
  type: "regular" | "large";
  children?: ReactNode
}

/**
 * Dialog
 */
const Dialog = ({ type, children }: DialogProps): JSX.Element => {
  return (
    <div className="dialog__wrapper">
      {/* Overlay */}
      <div className="overlay" />

      {/* Dialog */}
      <dialog className={type == "large" ? "dialog--large" : "dialog"}>
        {children}
      </dialog>
    </div>
  );
};

export default Dialog;
