// Modules
import { ReactNode } from "react";

export interface DialogActionsProps {
  children: ReactNode;
}

const DialogActions = ({ children }: DialogActionsProps) => (
  <div className="dialog__actions">{children}</div>
);

export default DialogActions;
