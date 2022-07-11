// Modules
import { ReactNode } from "react";
import { classNames } from "../../utils/helpers/elements";

// Types
import { SKComponent } from "../../utils/types";

export interface ActionsProps extends SKComponent {
  align?: "left" | "center";
  children: ReactNode;
}

const Actions = ({
  align,
  children,
  className,
  style,
}: ActionsProps): JSX.Element => (
  <div
    className={classNames([
      "actions",
      align == "left"
        ? "actions--left"
        : align == "center"
        ? "actions--center"
        : "",
      className,
    ])}
    style={style}
  >
    {children}
  </div>
);

export default Actions;
