// Modules
import { ReactNode } from "react";

// Types
import { SKComponent } from "../../utils/types";

export interface ActionsProps extends SKComponent {
  children: ReactNode;
}

const Actions = ({ children }: ActionsProps): JSX.Element => (
  <div className="actions">{children}</div>
);

export default Actions;
